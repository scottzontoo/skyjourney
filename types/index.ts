// types/index.ts
export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  departureAirport: string;
  departureIata: string;
  departureCity: string;
  arrivalAirport: string;
  arrivalIata: string;
  arrivalCity: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  aircraft?: string;
  bookingLink?: string;
}

export interface FlightStatus {
  flightDesignator: {
    carrierCode: string;
    flightNumber: string;
  };
  flightStatus: string;
  departure: {
    iataCode: string;
    scheduledTimeUtc: string;
    estimatedTimeUtc?: string;
    actualTimeUtc?: string;
    terminal?: string;
    gate?: string;
  };
  arrival: {
    iataCode: string;
    scheduledTimeUtc: string;
    estimatedTimeUtc?: string;
    actualTimeUtc?: string;
    terminal?: string;
    gate?: string;
  };
  remarks?: string;
}

export interface Booking {
  id: string;
  userId: string;
  flightId: string;
  passengerDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  paymentStatus: 'pending' | 'completed' | 'failed';
  bookingReference: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdminStats{
  totalBookings: number;
  totalRevenue: number;
  activeUsers: number;
  flightsThisMonth: number;
  popularRoutes: {
    route: string;
    bookings: number;
  }[];
}

export interface User{
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
  isAdmin?: boolean; // Optional field to indicate if the user is an admin
}