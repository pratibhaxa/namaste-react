import { CDN_URL } from "../utils/constants";

export const RestaurantCard = ({ resData }) => {
    const {
        cloudinaryImageId,
        resName,
        cuisine,
        avgRating,
        deliveryTime,
        costForTwo,
    } = resData;
    return (
        <>
            <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
                <img
                    src={CDN_URL + cloudinaryImageId}
                    alt="res-logo"
                    className="res-logo"
                />
                <span>{resName}</span>
                <br />
                <span>{cuisine.join(", ")}</span>
                <br />
                <span>{avgRating} stars</span>
                <br />
                <span>{deliveryTime} minutes</span>
                <br />
                <span>₹{costForTwo / 100} FOR TWO</span>
            </div>
        </>
    );
};
