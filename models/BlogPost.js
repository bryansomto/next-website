const { Schema, model, models, default: mongoose } = require("mongoose");

const BlogPostSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    link: String,
    images: [{ type: String }],
    category: { type: mongoose.Types.ObjectId, ref: "Category" },
    properties: { type: Object },
  },
  {
    timestamps: true,
  }
);

export const BlogPost = models.BlogPost || model("BlogPost", BlogPostSchema);
