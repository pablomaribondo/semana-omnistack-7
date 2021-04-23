import "./Feed.css";

import comment from "../assets/comment.svg";
import like from "../assets/like.svg";
import more from "../assets/more.svg";
import send from "../assets/send.svg";

const Feed = () => {
  return (
    <section id="post-list">
      <article>
        <header>
          <div className="user-info">
            <span>Pablo Maribondo</span>
            <span className="place">Recife</span>
          </div>

          <img src={more} alt="Mais" />
        </header>

        <img src="http://localhost:3333/files/monkey.jpg" alt="" />

        <footer>
          <div className="actions">
            <img src={like} alt="" />
            <img src={comment} alt="" />
            <img src={send} alt="" />
          </div>

          <strong>76 curtidas</strong>

          <p>
            sorrisão daora <span>#react #omnistack #topzeira</span>
          </p>
        </footer>
      </article>
      <article>
        <header>
          <div className="user-info">
            <span>Pablo Maribondo</span>
            <span className="place">Recife</span>
          </div>

          <img src={more} alt="Mais" />
        </header>

        <img src="http://localhost:3333/files/monkey.jpg" alt="" />

        <footer>
          <div className="actions">
            <img src={like} alt="" />
            <img src={comment} alt="" />
            <img src={send} alt="" />
          </div>

          <strong>76 curtidas</strong>

          <p>
            sorrisão daora <span>#react #omnistack #topzeira</span>
          </p>
        </footer>
      </article>
    </section>
  );
};

export default Feed;
