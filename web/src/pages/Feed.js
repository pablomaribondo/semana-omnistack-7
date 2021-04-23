import { useEffect, useState } from "react";

import api from "../services/api";
import "./Feed.css";

import comment from "../assets/comment.svg";
import like from "../assets/like.svg";
import more from "../assets/more.svg";
import send from "../assets/send.svg";

const Feed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get("posts");

      setFeed(response.data);
    })();
  }, []);

  const handleLike = postId => {
    api.post(`/posts/${postId}/like`);
  };

  return (
    <section id="post-list">
      {feed.map(post => (
        <article key={post._id}>
          <header>
            <div className="user-info">
              <span>{post.author}</span>
              <span className="place">{post.place}</span>
            </div>

            <img src={more} alt="Mais" />
          </header>

          <img src={`http://localhost:3333/files/${post.image}`} alt="" />

          <footer>
            <div className="actions">
              <button type="button" onClick={() => handleLike(post._id)}>
                <img src={like} alt="" />
              </button>
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>

            <strong>{post.likes} curtidas</strong>

            <p>
              {post.description} <span>{post.hashtags}</span>
            </p>
          </footer>
        </article>
      ))}
    </section>
  );
};

export default Feed;
