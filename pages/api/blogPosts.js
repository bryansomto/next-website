import { mongooseConnect } from "@/lib/mongoose";
import { BlogPost } from "@/models/BlogPost";
import { isAdminRequest } from "./auth/[...nextauth]";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  await isAdminRequest(req, res);

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await BlogPost.findOne({ _id: req.query.id }));
    } else {
      res.json(await BlogPost.find());
    }
  }

  if (method === "POST") {
    const { title, description, link, images, category, properties } = req.body;
    const BlogPostDoc = await BlogPost.create({
      title,
      description,
      link,
      images,
      category,
      properties,
    });
    res.json(BlogPostDoc);
  }

  if (method === "PUT") {
    const { title, description, link, images, category, properties, _id } =
      req.body;
    await BlogPost.updateOne(
      { _id },
      { title, description, link, images, category, properties }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await BlogPost.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
