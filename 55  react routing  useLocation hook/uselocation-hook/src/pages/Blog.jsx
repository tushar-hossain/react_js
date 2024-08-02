import { useParams, useLocation } from "react-router-dom";

const Blog = () => {
  const { title } = useParams();
  const location = useLocation();
  return (
    <div>
      <h1>{title}</h1>
      <p>{location.state.body.slice(0, 300)}</p>
      <p>{location.state.body.slice(300)}</p>
    </div>
  );
};

export default Blog;
