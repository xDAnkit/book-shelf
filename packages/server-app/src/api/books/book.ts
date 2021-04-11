import * as Mongoose from 'mongoose';

export interface IBook extends Mongoose.Document {
  sysId: string;
  title: string;
  description: string;
  year: number;
  price: number;
  author: string;
  isActive: boolean;
  STATUS: boolean;
  createdAt: Date;
  updateAt: Date;
}

export const BookSchema = new Mongoose.Schema(
  {
    sysId: { type: String, required: true, index: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    author: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
    STATUS: { type: Boolean, required: true, default: true }
  },
  {
    timestamps: true
  }
);

BookSchema.index({ sysId: 1 }, { unique: true });
export const BookModel = Mongoose.model<IBook>('Books', BookSchema);
