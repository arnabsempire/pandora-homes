import { NextRequest, NextResponse } from "next/server";

// Mock data
const MOCK_ROOMS = [
  {
    id: "1",
    title: "Private Suite with Study Desk",
    type: "private",
    floor: 3,
    capacity: 1,
    pricePerMonth: 18500,
    pricePerDay: 1200,
    amenities: ["Wi-Fi", "Study Desk", "AC", "Private Bathroom"],
    images: ["room1.jpg", "room2.jpg"],
    available: true,
    featured: true,
    description: "A comfortable private room with study desk and modern amenities.",
  },
  {
    id: "2",
    title: "Shared Dorm (4-bed)",
    type: "shared",
    floor: 2,
    capacity: 4,
    pricePerMonth: 8500,
    pricePerDay: 500,
    amenities: ["Wi-Fi", "Shared Kitchen", "Locker"],
    images: ["dorm1.jpg"],
    available: true,
    featured: true,
    description: "Affordable shared dorm with friendly community atmosphere.",
  },
  {
    id: "3",
    title: "Studio Suite",
    type: "studio",
    floor: 4,
    capacity: 2,
    pricePerMonth: 12000,
    pricePerDay: 800,
    amenities: ["Wi-Fi", "Kitchenette", "Private Entrance"],
    images: ["studio1.jpg"],
    available: false,
    featured: false,
    description: "Spacious studio suite perfect for couples or roommates.",
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const available = searchParams.get("available");

    let filtered = [...MOCK_ROOMS];

    if (type) {
      filtered = filtered.filter((room) => room.type === type);
    }

    if (available === "true") {
      filtered = filtered.filter((room) => room.available);
    }

    return NextResponse.json({
      success: true,
      data: filtered,
      total: filtered.length,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch rooms" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.pricePerMonth) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Mock: Create new room
    const newRoom = {
      id: String(MOCK_ROOMS.length + 1),
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return NextResponse.json(
      { success: true, data: newRoom },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create room" },
      { status: 500 }
    );
  }
}
