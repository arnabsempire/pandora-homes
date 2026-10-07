export const ROOM_TYPES = {
  PRIVATE: "private",
  SHARED: "shared",
  STUDIO: "studio",
} as const;

export const BOOKING_STATUS = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  CHECKED_IN: "checked-in",
  CHECKED_OUT: "checked-out",
  CANCELLED: "cancelled",
} as const;

export const AMENITIES = [
  "Wi-Fi",
  "Air Conditioning",
  "Study Desk",
  "Private Bathroom",
  "Shared Kitchen",
  "Locker Storage",
  "Gym",
  "Library",
  "Laundry Service",
  "24/7 Security",
  "Meals Included",
  "Gaming Zone",
] as const;

export const FILTERS = {
  PRICE_MIN: 0,
  PRICE_MAX: 50000,
  CAPACITY_MIN: 1,
  CAPACITY_MAX: 4,
} as const;

export const PAGINATION = {
  DEFAULT_LIMIT: 12,
  DEFAULT_PAGE: 1,
} as const;

export const MESSAGES = {
  SUCCESS: "Operation completed successfully",
  ERROR: "An error occurred. Please try again.",
  UNAUTHORIZED: "You are not authorized to perform this action",
  NOT_FOUND: "Resource not found",
  VALIDATION_ERROR: "Please check your input and try again",
} as const;
