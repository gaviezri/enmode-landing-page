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

// Detect the base path Vite was built with (e.g. "/enmode-landing-page/")
const BASE = process.env.VITE_BASE || '/'

const MIME = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.svg':  'image/svg+xml',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.mp4':  'video/mp4',
  '.woff2':'font/woff2',
}

// Minimal static file server that strips the base prefix before resolving files
function serve() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      // Strip the base prefix so /enmode-landing-page/assets/x.js → /assets/x.js
      let url = req.url
      if (BASE !== '/' && url.startsWith(BASE)) {
        url = url.slice(BASE.length - 1) // keep the leading /
      }
      if (url === '/') url = '/index.html'

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
      console.log(`[prerender] Serving dist/ on http://localhost:${PORT} (base: ${BASE})`)
      resolve(server)
    })
  })
}

async function prerender() {
  const server = await serve()
  const isCI = !!process.env.CI
  const browser = await puppeteer.launch({
    headless: true,
    args: isCI ? ['--no-sandbox', '--disable-setuid-sandbox'] : [],
  })

  for (const route of ROUTES) {
    // Navigate to the base path so asset URLs resolve correctly
    const url = `http://localhost:${PORT}${BASE}${route === '/' ? '' : route}`
    console.log(`[prerender] Rendering ${url} ...`)
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30_000 })

    // Wait for React root to have content
    await page.waitForSelector('#root > *', { timeout: 10_000 })

    // Small extra wait for animations to settle and content to render
    await new Promise((r) => setTimeout(r, 2000))

    let html = await page.content()

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
