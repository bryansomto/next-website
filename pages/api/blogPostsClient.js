import { mongooseConnect } from "@/lib/mongoose";
import { BlogPost } from "@/models/BlogPost";

export default async function handle(req, res) {
  await mongooseConnect();
  const { categories, sort, phrase, ...filters } = req.query;
  let [sortField, sortOrder] = (sort || "_id-desc").split("-");
  const blogPostsQuery = {};
  if (categories) {
    blogPostsQuery.category = categories.split(",");
  }
  if (phrase) {
    blogPostsQuery["$or"] = [
      { title: { $regex: phrase, $options: "i" } },
      { description: { $regex: phrase, $options: "i" } },
    ];
  }
  if (Object.keys(filters).length > 0) {
    Object.keys(filters).forEach((filterName) => {
      blogPostsQuery["properties." + filterName] = filters[filterName];
    });
  }
  res.json(
    await BlogPost.find(blogPostsQuery, null, {
      sort: { [sortField]: sortOrder === "asc" ? 1 : -1 },
    })
  );
}
