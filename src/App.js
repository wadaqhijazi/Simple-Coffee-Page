import axios from "axios";
import "./App.css";
import img1 from "./bg-cafe.jpg";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
function App() {
  let [data, setData] = useState([]);
  const getingData = async () => {
    const response = await axios.get(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    );
    console.log(response.data[0].available);
    setData(response.data);
  };
  useEffect(() => {
    getingData();
  }, []);

  let drinks = data.map((drink) => {
    if (drink.available === false) {
    }

    return (
      <div className="drink-info" key={drink.id}>
        <div className={drink.popular ? "popular" : "non-popular"}>
          <div className="img">
            <img src={drink.image} alt={drink.name} />
          </div>
        </div>
        <div className="name-price">
          <div className="name">{drink.name}</div>
          <div className="price">{drink.price}</div>
        </div>
        <div className="rating">
          <div className="rating-info">
            {" "}
            <div className="icon">
              <FontAwesomeIcon
                icon={faStar}
                className={drink.rating === null ? "gray" : "gold"}
              />
            </div>{" "}
            {drink.rating ? drink.rating : "No Ratings"}
            <span className="votes">
              {" "}
              {drink.votes ? `(${drink.votes} votes)` : ""}{" "}
            </span>
          </div>
          <div className="available">{drink.available ? "" : "Sold out"}</div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="container">
        <div className="background-img">
          {" "}
          <img src={img1} alt="caffe" />
        </div>

        <div className="our-collection">
          <div className="header-collection">
            <div className="vector">
              <svg
                width="257"
                height="153"
                viewBox="0 0 257 153"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 71.8885C3.45531 57.3142 23.696 41.7169 33.6244 33.2805C66.0308 5.74397 114.381 -4.23546 155.905 5.8326C246.941 27.9052 154.103 161.746 80.308 136.587C52.5484 127.123 76.0283 89.2122 86.9341 76.2621C113.937 44.1978 164.916 27.0297 204.998 44.5915C239.889 59.8782 266.993 108.858 249.574 146.239C247.754 150.145 240.823 152.29 236.924 150.16C231.733 147.325 239.159 139.456 240.538 137.04"
                  stroke="#302522"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <h1>Our Collection</h1>
            <p>
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
            <div className="head-option">
              <button>All Products</button>
              <button>Available Now</button>
            </div>
          </div>
          <div className="drinks-list">{drinks}</div>
        </div>
      </div>
    </>
  );
}

export default App;
