import type { VaultItem } from '../../types'

export const WISHLIST_ITEMS: VaultItem[] = [
  { id: 1,  name: 'Oversized Cashmere',   brand: 'Max Mara',        price: 1950, originalPrice: 2390, colorA: '#C4A87A', colorB: '#906848', category: 'Outerwear', alert: 'price-drop', board: 'Autumn Workwear' },
  { id: 2,  name: 'Silk Midi Dress',       brand: 'The Row',         price: 1850,                      colorA: '#E8E2D8', colorB: '#C8C2B8', category: 'Dress',                          board: 'Evening Edit' },
  { id: 3,  name: 'Tailored Trousers',     brand: 'Toteme',          price: 420,                       colorA: '#36454F', colorB: '#1E2A34', category: 'Bottoms',                        board: 'Autumn Workwear' },
  { id: 4,  name: 'Structured Blazer',     brand: 'Acne Studios',    price: 780,                       colorA: '#CEC4B8', colorB: '#AEA498', category: 'Outerwear', alert: 'low-stock',  board: 'Autumn Workwear' },
  { id: 5,  name: 'Leather Loafers',       brand: 'Bottega Veneta',  price: 980,                       colorA: '#C4956A', colorB: '#A47550', category: 'Shoes',                          board: 'Everyday Luxury' },
  { id: 6,  name: 'Mini Shoulder Bag',     brand: 'Saint Laurent',   price: 1250,                      colorA: '#1A1614', colorB: '#100E0C', category: 'Accessory',                      board: 'Evening Edit' },
  { id: 7,  name: 'Linen Shirt',           brand: 'Arket',           price: 89,                        colorA: '#F0EBE2', colorB: '#D5CEC5', category: 'Top',                            board: 'Everyday Luxury' },
  { id: 8,  name: 'Wide-Leg Jeans',        brand: 'Agolde',          price: 238,                       colorA: '#4A5A6E', colorB: '#2A3A4E', category: 'Bottoms',   alert: 'low-stock',  board: 'Everyday Luxury' },
]

export const BOARDS = ['All', 'Autumn Workwear', 'Evening Edit', 'Everyday Luxury'] as const
export type Board = (typeof BOARDS)[number]