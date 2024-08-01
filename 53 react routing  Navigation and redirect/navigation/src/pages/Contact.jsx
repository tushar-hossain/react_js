import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, voluptatum blanditiis dolorum laboriosam eveniet error reiciendis possimus
        consequuntur illum sed ipsa ea cum dolores optio vitae sint deleniti eaque cupiditate magni! Commodi officia at sint nesciunt illum animi,
        temporibus consectetur fugit earum illo quo ullam quam repudiandae quia quis odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nam sit ipsum nemo distinctio beatae repudiandae fugit consequatur quae
        cumque esse blanditiis eaque sint, dignissimos quas tempora necessitatibus neque. Explicabo?
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        go to home
      </button>
    </div>
  );
};

export default Contact;
