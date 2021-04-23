import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./New.css";

import api from "../services/api";

const New = () => {
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [hashtags, setHashtags] = useState("");

  const history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();

    const data = new FormData();

    data.append("image", image);
    data.append("author", author);
    data.append("place", place);
    data.append("description", description);
    data.append("hashtags", hashtags);

    await api.post("posts", data);

    history.push("/");
  };

  return (
    <form id="new-post" onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={({ target: { files } }) => setImage(files[0])}
      />
      <input
        type="text"
        name="author"
        placeholder="Autor do post"
        onChange={({ target: { value } }) => setAuthor(value)}
        value={author}
      />
      <input
        type="text"
        name="place"
        placeholder="Local do post"
        onChange={({ target: { value } }) => setPlace(value)}
        value={place}
      />
      <input
        type="text"
        name="description"
        placeholder="Descrição do post"
        onChange={({ target: { value } }) => setDescription(value)}
        value={description}
      />
      <input
        type="text"
        name="hashtags"
        placeholder="Hashtags do post"
        onChange={({ target: { value } }) => setHashtags(value)}
        value={hashtags}
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default New;
