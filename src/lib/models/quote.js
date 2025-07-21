import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Prevent re-registering model during hot reloads
const Quote = mongoose.models.Quote || mongoose.model("Quote", QuoteSchema);

export default Quote;
