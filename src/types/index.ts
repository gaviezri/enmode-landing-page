export type BudgetTier = 'Basic' | 'Premium' | 'Luxury'

export type GarmentCategory = 'top' | 'bottom' | 'outerwear' | 'shoes' | 'accessory'

export interface OutfitItem {
  id: number
  name: string
  brand: string
  price: number
  tier: BudgetTier
  category: GarmentCategory
  colorA: string
  colorB: string
  liked: boolean
}

export interface VaultItem {
  id: number
  name: string
  brand: string
  price: number
  originalPrice?: number
  colorA: string
  colorB: string
  category: string
  alert?: 'price-drop' | 'low-stock'
  board: string
}

export interface MeasurementPoint {
  id: string
  label: string
  value: string
  cx: string
  cy: string
  side: 'left' | 'right'
}

export interface ScrollStep {
  num: string
  label: string
  heading: string
  body: string
}
