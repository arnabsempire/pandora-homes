export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 8;
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+?(\d{1,3})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 100;
};

export const validateBookingDates = (checkIn: Date, checkOut: Date): boolean => {
  return checkOut > checkIn;
};

export const validatePrice = (price: number): boolean => {
  return price > 0 && price < 1000000;
};

export const validateCapacity = (capacity: number): boolean => {
  return capacity >= 1 && capacity <= 10;
};

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>\"']/g, "")
    .substring(0, 500);
};

export const validateForm = (data: {
  email?: string;
  password?: string;
  name?: string;
  phone?: string;
}): { valid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (data.email && !validateEmail(data.email)) {
    errors.email = "Invalid email address";
  }

  if (data.password && !validatePassword(data.password)) {
    errors.password = "Password must be at least 8 characters";
  }

  if (data.name && !validateName(data.name)) {
    errors.name = "Name must be between 2 and 100 characters";
  }

  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = "Invalid phone number";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};
