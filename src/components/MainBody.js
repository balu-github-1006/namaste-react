import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"; //Named import
import Shimmer from "./Shimmer";

//We can write internal css also in react. We should declare a object with css properties.
//This object we can set to style attribute on a component as a prop.
const cssStyle = {
  backgroundColor: "green",
  color: "#000",
};

//MainContent
const MainBody = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4434646&lng=78.3771953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="mainBody" style={cssStyle}>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className=""
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn"
          onClick={() => {
            //Normal js way to re-set variable but this will not work in react.
            // listOfRestaurants = listOfRestaurants.filter(
            //   (restaurant, index) => {
            //     return restaurant.info.avgRating > 4;
            //   }
            // );
            //console.log(listOfRestaurants);

            setListOfRestaurants(
              listOfRestaurants.filter(
                (restaurant, index) => restaurant.info.avgRating > 4
              )
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default MainBody;
