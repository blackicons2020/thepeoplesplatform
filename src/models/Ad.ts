import mongoose, { Schema, model, models } from 'mongoose';

const adSchema = new Schema({
  clientName: { type: String, required: true },
  email: { type: String, required: true },
  plan: { type: String, required: true },
  amount: Number,
  status: { type: String, enum: ['pending', 'active', 'rejected'], default: 'pending' },
  dateSubmitted: { type: Date, default: Date.now },
  receiptImage: String,
  adImage: String,
  adContent: String,
  adUrl: String,
  adHeadline: String,
  adContentFile: String,
  paymentReference: { type: String, unique: true, sparse: true }
}, { timestamps: true });

const Ad = models.Ad || model('Ad', adSchema);

export default Ad;
