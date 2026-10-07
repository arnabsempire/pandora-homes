export interface User {
  id: string
  email: string
  name: string
  phone?: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface Room {
  id: string
  title: string
  description: string
  type: "private" | "shared" | "studio"
  floor: number
  capacity: number
  pricePerMonth: number
  pricePerDay?: number
  amenities: string[]
  images: string[]
  available: boolean
  featured: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Booking {
  id: string
  userId: string
  roomId: string
  checkInDate: Date
  checkOutDate: Date
  totalPrice: number
  status: "pending" | "confirmed" | "checked-in" | "checked-out" | "cancelled"
  createdAt: Date
  updatedAt: Date
}

export interface Review {
  id: string
  userId: string
  roomId: string
  rating: number
  comment: string
  createdAt: Date
  updatedAt: Date
}

export interface SearchParams {
  checkInDate?: string
  checkOutDate?: string
  roomType?: string
  priceMin?: number
  priceMax?: number
  query?: string
  page?: number
  limit?: number
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}
