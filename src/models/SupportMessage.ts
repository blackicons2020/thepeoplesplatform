import mongoose, { Schema, model, models } from 'mongoose';

const supportSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: String,
  message: { type: String, required: true },
  status: { type: String, enum: ['unread', 'read', 'replied'], default: 'unread' },
  reply: { type: String, default: '' },
  replyDate: Date
}, { timestamps: true });

const SupportMessage = models.SupportMessage || model('SupportMessage', supportSchema);

export default SupportMessage;
