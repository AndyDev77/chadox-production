import { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document {
  title: string;
  publicId: string;
  imagesURL: string;
  videoURL: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const ImageSchema = new Schema({
  title: { type: String, required: true },
  publicId: { type: String, required: true },
  imagesURL: { type: String, required: true },
  videoURL: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
