import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { blogsData } from "./blogsData";

const Blog = () => {
  const { title } = useParams();
  const [blogs, setBlogs] = useState("");
  useEffect(() => {
    const blogData = blogsData.filter((blog) => blog.title === title);
    setBlogs(blogData[0].body);
  });
  return (
    <div>
      <h1>{title}</h1>
      <p>{blogs.slice(0, 200)}</p>
      <p>{blogs.slice(201, 400)}</p>
      <p>{blogs.slice(401)}</p>
    </div>
  );
};

export default Blog;
