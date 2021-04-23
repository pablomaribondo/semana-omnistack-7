const Post = require("../models/Post");

module.exports = {
  async store(request, response) {
    const { id } = request.params;
    const post = await Post.findById(id);

    post.likes += 1;

    await post.save();

    request.io.emit("like", post);

    return response.json(post);
  },
};
