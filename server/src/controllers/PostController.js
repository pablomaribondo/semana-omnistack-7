const Post = require("../models/Post");

module.exports = {
  async index(request, response) {},

  async store(request, response) {
    console.log(request.body);
    return response.json({ ok: true });
  },
};
