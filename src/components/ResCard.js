const ResCard = (props) => {
  const { resInfo } = props;

  const { name, description, imageId, price, ratings } = resInfo;
  return (
    <div className="res-card-tile">
      <div className="description">
        <h3>{name}</h3>
        <h4>₹ {price / 100}</h4>
        <h5>★ {ratings.aggregatedRating.rating}</h5>
        <p>{description}</p>
      </div>
      <div className="res-card-food-img">
        {imageId == null || undefined ? (
          ""
        ) : (
          <img
            src={
              `https://media-assets.swiggy.com/swiggy/image/upload/` + imageId
            }
          />
        )}
      </div>
    </div>
  );
};

export default ResCard;
