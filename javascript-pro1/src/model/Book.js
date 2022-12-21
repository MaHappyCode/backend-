import { Schema, model } from "mongoose";

const BookSchema = new Schema({
  author: { type: String, required: true },
  year: { type: Number, required: true },
  title: { type: String, require: true },
  isbn: { type: String, require: true },
});

const Book = model("Book", BookSchema);
export default Book;
