import { useState, useEffect } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { restaurantAPI } from "./utils/constants";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestarantMenu] = useState([]);
  const [headerInfo, setHeaderInfo] = useState([]);
  const { resId } = useParams();
  console.log(resId);
  const fetchApi = async () => {
    const apiData = await fetch(restaurantAPI + resId);
    //restaurantAPI + resId

    const apiDataJson = await apiData.json();
    setRestarantMenu(apiDataJson?.data?.cards);
    setHeaderInfo(apiDataJson?.data?.cards);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (restaurantMenu.length === 0) {
    return <Shimmer />;
  }

  const restarantHeaderInfo = headerInfo?.filter((arr) => {
    return arr?.card?.card?.info;
  });

  const { name, areaName, costForTwo, cuisines, avgRating, sla } =
    restarantHeaderInfo[0]?.card?.card?.info;

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <div className="top-desc">
        <h4>
          <span>★ {avgRating}</span>
          <span>₹{costForTwo}</span>
        </h4>
        <h2>{cuisines.join(", ")}</h2>
        <h3>{areaName}</h3>
        <h4>{sla.deliveryTime}</h4>
      </div>
      <div className="food_type_filter">
        <button
          className="veg"
          onClick={() => {
            const vegOnly = restaurantMenu?.filter((arr) => {
              return arr?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
                (item) => {
                  return item?.card?.card?.itemCards?.filter((inner_item) => {
                    return inner_item?.card?.info?.avgRating < 4;
                  });
                }
              );
            });
            console.log(vegOnly);
            console.log(restaurantMenu);
            setRestarantMenu(vegOnly);
          }}
        >
          Veg
        </button>
        <button className="nonVeg">Non-Veg</button>
        <button className="bestSeller">Bestseller</button>
      </div>
      <div className="accordian-container">
        {restaurantMenu?.map((arr) => {
          return arr?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
            (menu, index) => {
              return (
                <div className="accordian" key={index}>
                  <div className="accord-title">
                    <h1>{menu.card.card.title}</h1>
                    <span>&#11206;</span>
                  </div>
                  <div className="accord-content">
                    {menu?.card?.card?.itemCards?.map((item) => {
                      return (
                        <ResCard
                          resInfo={item.card.info}
                          key={item.card.info.id}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            }
          );
        })}
        {/* {restaurantMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
          (menu, index) => {
            return (
              <div className="accordian" key={index}>
                <div className="accord-title">
                  <h1>{menu.card.card.title}</h1>
                  <span>&#11206;</span>
                </div>
                <div className="accord-content">
                  {menu?.card?.card?.itemCards?.map((item) => {
                    return (
                      <ResCard
                        resInfo={item.card.info}
                        key={item.card.info.id}
                      />
                    );
                  })}
                </div>
              </div>
            );
          }
        )} */}
        {/* <div className="accordian">
          <div className="accord-title"></div>
          <div className="accord-content">
            {restaurantMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
              (restMenu) => {
                return (
                  <ResCard resInfo={restMenu} key={restMenu.card.info.id} />
                );
              }
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
