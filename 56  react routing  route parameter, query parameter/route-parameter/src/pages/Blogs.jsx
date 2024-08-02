import { useState } from "react";
import { blogsData } from "./blogsData";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, 50) + " ...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <h1>Blogs page</h1>
      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h1>{title}</h1>
              <p>{truncateString(body, 50)}</p>
              <Link to={title} state={{ body }}>
                learn more
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Blogs;
