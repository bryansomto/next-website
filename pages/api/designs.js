import { mongooseConnect } from "@/lib/mongoose";
import { Design } from "@/models/Design";
import { isAdminRequest } from "./auth/[...nextauth]";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  await isAdminRequest(req, res);

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Design.findOne({ _id: req.query.id }));
    } else {
      res.json(await Design.find());
    }
  }

  if (method === "POST") {
    const { title, description, link, images, category, properties } = req.body;
    const DesignDoc = await Design.create({
      title,
      description,
      link,
      images,
      category,
      properties,
    });
    res.json(DesignDoc);
  }

  if (method === "PUT") {
    const { title, description, link, images, category, properties, _id } =
      req.body;
    await Design.updateOne(
      { _id },
      { title, description, link, images, category, properties }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Design.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
