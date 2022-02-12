"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = exports.BookSchema = void 0;
const Mongoose = require("mongoose");
exports.BookSchema = new Mongoose.Schema({
    sysId: { type: String, required: true, index: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    author: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
    STATUS: { type: Boolean, required: true, default: true }
}, {
    timestamps: true
});
exports.BookSchema.index({ sysId: 1 }, { unique: true });
exports.BookModel = Mongoose.model('Books', exports.BookSchema);
//# sourceMappingURL=book.js.map