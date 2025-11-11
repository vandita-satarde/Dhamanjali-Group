import mongoose from "mongoose";

const handpickedSchema = new mongoose.Schema({
  name: String,
  plotArea: String,
  price: {
    from: { type: String, required: true },
    to: { type: String, required: true },
  },
  imageUrl: String,
  description: String,
  highlights: [String],
});

export default mongoose.model("HandpickedProject", handpickedSchema);
