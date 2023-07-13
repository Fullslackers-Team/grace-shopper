import { Link } from "react-router-dom";
import "../index.css";

export default function top() {
  return (
    <div className="top-section">
      <div className="top-textbox">
        <h2>
          "Everyone thinks that they have the best pet. None of them are wrong."
        </h2>
        <p>
          Here at Paws & Claws, your best friend is our top priority. We offer
          the highest quality items to keep your pet healthy, happy, and tame.
        </p>
      </div>
      <img
        className="top-pup"
        src="https://cdn.cnn.com/cnn/interactive/2018/11/entertainment/dogs-catching-treats-cnnphotos/media/01.jpg"
        alt="Pup catching treats"
      />
    </div>
  );
}
