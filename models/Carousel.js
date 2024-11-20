const { Schema, model, models, default: mongoose } = require("mongoose");

const CarouselSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    link: String,
    images: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export const Carousel = models.Carousel || model("Carousel", CarouselSchema);
