const Post = require("../models/Post");

module.exports = {
  async index(request, response) {},

  async store(request, response) {
    const { author, place, description, hashtags } = request.body;
    const { filename: image } = request.file;

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image,
    });

    return response.json(post);
  },
};
