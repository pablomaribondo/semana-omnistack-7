const Post = require("../models/Post");

module.exports = {
  async store(request, response) {
    const { id } = request.params;
    const post = await Post.findById(id);

    post.likes += 1;

    await post.save();

    return response.json(post);
  },
};
