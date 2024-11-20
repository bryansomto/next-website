import { mongooseConnect } from "@/lib/mongoose";
import { Carousel } from "@/models/Carousel";
import { isAdminRequest } from "./auth/[...nextauth]";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  // await isAdminRequest(req, res);

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Carousel.findOne({ _id: req.query.id }));
    } else {
      res.json(await Carousel.find());
    }
  }

  if (method === "POST") {
    const { title, description, link, images } = req.body;
    const CarouselDoc = await Carousel.create({
      title,
      description,
      link,
      images,
    });
    res.json(CarouselDoc);
  }

  if (method === "PUT") {
    const { title, description, link, images, _id } = req.body;
    await Carousel.updateOne({ _id }, { title, description, link, images });
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Carousel.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
