import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Smoothie = new Schema(
  {
    title: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: { type: String, required: true },
    imageURL: { type: String, required: true },
  },
  { timestamps: true }
)

export default mongoose.model('smoothies', Smoothie)
