/**
 * Post-build pre-rendering script.
 * Launches a local server for the built `dist/` folder,
 * opens it in headless Chromium, waits for React to hydrate,
 * and overwrites dist/index.html with the fully-rendered HTML.
 *
 * Usage:  node scripts/prerender.mjs
 */

import { createServer } from 'http'
import { readFileSync, writeFileSync } from 'fs'
import { join, extname } from 'path'
import puppeteer from 'puppeteer'

const DIST = new URL('../dist', import.meta.url).pathname
const PORT = 4173
const ROUTES = ['/']

const MIME = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.svg':  'image/svg+xml',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.woff2':'font/woff2',
}

// Minimal static file server for the dist folder
function serve() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const url = req.url === '/' ? '/index.html' : req.url
      const filePath = join(DIST, url)
      try {
        const data = readFileSync(filePath)
        const ext = extname(filePath)
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
        res.end(data)
      } catch {
        // SPA fallback — serve index.html for unknown routes
        const html = readFileSync(join(DIST, 'index.html'))
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(html)
      }
    })
    server.listen(PORT, () => {
      console.log(`[prerender] Serving dist/ on http://localhost:${PORT}`)
      resolve(server)
    })
  })
}

async function prerender() {
  const server = await serve()
  const browser = await puppeteer.launch({ headless: true })

  for (const route of ROUTES) {
    console.log(`[prerender] Rendering ${route} ...`)
    const page = await browser.newPage()
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 30_000 })

    // Wait for React root to have content
    await page.waitForSelector('#root > *', { timeout: 10_000 })

    // Small extra wait for animations to settle and content to render
    await new Promise((r) => setTimeout(r, 2000))

    let html = await page.content()

    // Remove any scripts that re-hydrate (the pre-rendered HTML is the fallback;
    // the original <script type="module"> in the built HTML will still hydrate on client)
    // We keep scripts intact so the page stays interactive.

    const outPath = join(DIST, route === '/' ? 'index.html' : `${route}/index.html`)
    writeFileSync(outPath, html, 'utf-8')
    console.log(`[prerender] Wrote ${outPath}`)
    await page.close()
  }

  await browser.close()
  server.close()
  console.log('[prerender] Done!')
}

prerender().catch((err) => {
  console.error('[prerender] Failed:', err)
  process.exit(1)
})
