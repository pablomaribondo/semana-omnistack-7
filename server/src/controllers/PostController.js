const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const Post = require("../models/Post");

module.exports = {
  async index(_request, response) {
    const posts = await Post.find().sort("-createdAt");

    return response.json(posts);
  },

  async store(request, response) {
    const { author, place, description, hashtags } = request.body;
    const { filename: image, path: filePath, destination } = request.file;

    const [name] = image.split(".");
    const fileName = `${name}.jpg`;

    await sharp(filePath)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(path.resolve(destination, "resized", fileName));

    fs.unlinkSync(filePath);

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image: fileName,
    });

    request.io.emit("post", post);

    return response.json(post);
  },
};
