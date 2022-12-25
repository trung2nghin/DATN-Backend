const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Order = new Schema(
  {
    user: { type: String, required: true, ref: 'User' },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: String },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Order', Order)
