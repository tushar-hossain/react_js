import { FaFacebook, FaYoutube } from "react-icons/fa";
import "./index.css";

function App() {
  return (
    <div>
      <h1>
        Facebook
        {
          <span>
            <FaFacebook className="icon" />
          </span>
        }
      </h1>
      <h1>
        Youtube
        {
          <span>
            <FaYoutube className="icon" />
          </span>
        }
      </h1>
    </div>
  );
}

export default App;
