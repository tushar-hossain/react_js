import { useState } from "react";
import { Link } from "react-router-dom";

import { blogsData } from "./blogsData";

const Blogs = () => {
  const [Blogs, setBlogs] = useState(blogsData);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + " ...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <h1>Blogs Page</h1>
      <section>
        {Blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h1>{title}</h1>
              <p>{truncateString(body, 50)} </p>
              <Link to={title} state={{ body }} className="link">
                Learn more
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Blogs;
