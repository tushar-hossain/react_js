import { useState } from "react";
import { blogsData } from "./blogsData";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <section>
        {blogs.map((Blogs) => {
          const { id, title, body } = Blogs;
          return (
            <article key={id}>
              <h1>{title}</h1>
              <p>{truncateString(body, 100)}</p>
              <Link to={title}>Learn More</Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Blogs;
