import { RES_IMG_URL } from "../utils/constants";

const RestaurntCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, cloudinaryImageId , id} = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={RES_IMG_URL + cloudinaryImageId}
      ></img>
      <h3 data-restaurant-id={id}>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurntCard;
