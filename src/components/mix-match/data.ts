import type { OutfitItem } from '../../types'

export const OUTFIT_ITEMS: OutfitItem[] = [
  // Basic
  { id: 1,  name: 'Linen Shirt',        brand: 'Uniqlo',          price: 39,   tier: 'Basic',   category: 'top',       colorA: '#E8E0D5', colorB: '#C8C0B5', liked: false },
  { id: 2,  name: 'Straight-Leg Jeans', brand: 'Mango',           price: 59,   tier: 'Basic',   category: 'bottom',    colorA: '#3A4A5E', colorB: '#2A3A4E', liked: false },
  { id: 3,  name: 'White Sneakers',     brand: 'Veja',            price: 120,  tier: 'Basic',   category: 'shoes',     colorA: '#F0EDE8', colorB: '#D8D5D0', liked: true  },
  { id: 4,  name: 'Knit Cardigan',      brand: 'H&M',             price: 45,   tier: 'Basic',   category: 'top',       colorA: '#C4A882', colorB: '#A08865', liked: false },
  { id: 5,  name: 'Wide-Leg Trousers',  brand: 'COS',             price: 89,   tier: 'Basic',   category: 'bottom',    colorA: '#2B2F36', colorB: '#1E2228', liked: false },
  { id: 6,  name: 'Ankle Boots',        brand: '& Other Stories', price: 175,  tier: 'Basic',   category: 'shoes',     colorA: '#1E1A16', colorB: '#141210', liked: false },
  // Premium
  { id: 7,  name: 'Oversized Blazer',   brand: 'Toteme',          price: 420,  tier: 'Premium', category: 'outerwear', colorA: '#CEC4B8', colorB: '#AEA498', liked: true  },
  { id: 8,  name: 'Silk Blouse',        brand: 'Arket',           price: 145,  tier: 'Premium', category: 'top',       colorA: '#F5F0E8', colorB: '#E5E0D8', liked: false },
  { id: 9,  name: 'Tailored Trousers',  brand: 'Theory',          price: 295,  tier: 'Premium', category: 'bottom',    colorA: '#36454F', colorB: '#262F37', liked: false },
  { id: 10, name: 'Leather Loafers',    brand: 'A.P.C.',          price: 350,  tier: 'Premium', category: 'shoes',     colorA: '#241E18', colorB: '#161210', liked: false },
  // Luxury
  { id: 11, name: 'Cashmere Coat',      brand: 'Max Mara',        price: 2390, tier: 'Luxury',  category: 'outerwear', colorA: '#C4A87A', colorB: '#A08858', liked: true  },
  { id: 12, name: 'Silk Midi Dress',    brand: 'The Row',         price: 1850, tier: 'Luxury',  category: 'top',       colorA: '#E8E2D8', colorB: '#C8C2B8', liked: false },
  { id: 13, name: 'Strappy Heels',      brand: 'Bottega Veneta',  price: 980,  tier: 'Luxury',  category: 'shoes',     colorA: '#C4956A', colorB: '#A47550', liked: false },
  { id: 14, name: 'Mini Bag',           brand: 'Saint Laurent',   price: 1250, tier: 'Luxury',  category: 'accessory', colorA: '#1A1614', colorB: '#100E0C', liked: false },
]
