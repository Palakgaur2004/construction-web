import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    address: String,
    date: String,
    time: String, 
  },
  { timestamps: true }
);

export const Booking = mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
export default Booking;