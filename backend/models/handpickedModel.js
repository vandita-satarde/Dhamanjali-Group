import mongoose from "mongoose";

const handpickedSchema = new mongoose.Schema({
  name: String,
  plotArea: String,
  price: String,
  imageUrl: String,
  description: String,
  highlights: [String],
});

export default mongoose.model("HandpickedProject", handpickedSchema);
