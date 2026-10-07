import axios, { AxiosInstance } from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Add interceptor to include auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      localStorage.removeItem("auth_token")
      window.location.href = "/login"
    }
    return Promise.reject(error)
  }
)

export const api = {
  // Auth
  login: (email: string, password: string) =>
    apiClient.post("/auth/login", { email, password }),
  register: (email: string, password: string, name: string) =>
    apiClient.post("/auth/register", { email, password, name }),
  logout: () => apiClient.post("/auth/logout"),

  // Rooms/Listings
  getRooms: (params?: any) =>
    apiClient.get("/rooms", { params }),
  getRoomById: (id: string) =>
    apiClient.get(`/rooms/${id}`),
  searchRooms: (params: any) =>
    apiClient.get("/rooms/search", { params }),

  // Bookings
  getBookings: () =>
    apiClient.get("/bookings"),
  getBookingById: (id: string) =>
    apiClient.get(`/bookings/${id}`),
  createBooking: (data: any) =>
    apiClient.post("/bookings", data),
  updateBooking: (id: string, data: any) =>
    apiClient.put(`/bookings/${id}`, data),
  cancelBooking: (id: string) =>
    apiClient.delete(`/bookings/${id}`),

  // Reviews
  getReviews: (roomId: string) =>
    apiClient.get(`/reviews`, { params: { roomId } }),
  createReview: (data: any) =>
    apiClient.post("/reviews", data),

  // Users
  getProfile: () =>
    apiClient.get("/users/profile"),
  updateProfile: (data: any) =>
    apiClient.put("/users/profile", data),
}

export default api
