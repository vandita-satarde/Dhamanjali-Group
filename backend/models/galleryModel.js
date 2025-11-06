import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
    imageUrl: { type: String, requiredL: true },
    public_id: { type: String, required: true },
});

export default mongoose.model("Gallery", gallerySchema);