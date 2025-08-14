import ReactDOM from "react-dom/client";

/*
    Header
        - Logo
        - Nav Items
    Body
        - Search 
        - RestaurentContainer
        - RestaurantCard
            - Img
            - Name of Restaurant, Star Rating, Cuisine, Delinery Time
    Footer
        - Copyright
        - Links
        - Address
        - Contact
*/

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo-container">
                    <img
                        className="logo"
                        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"
                        alt=""
                    />
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Card</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

const RestaurantCard = ({ resData }) => {
    const {
        cloudinaryImageId,
        resName,
        cuisine,
        stars,
        deliveryTime,
        costForTwo,
    } = resData;
    return (
        <>
            <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
                <img
                    src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                        cloudinaryImageId
                    }
                    alt="res-logo"
                    className="res-logo"
                />
                <span>{resName}</span>
                <br />
                <span>{cuisine.join(", ")}</span>
                <br />
                <span>{stars}</span>
                <br />
                <span>{deliveryTime} minutes</span>
                <br />
                <span>₹{costForTwo / 100} FOR TWO</span>
            </div>
        </>
    );
};

const resData = [
    {
        resName: "Meghana Foods",
        cuisine: ["Biryani", "North Indian", "Asian"],
        stars: "4.4 stars",
        deliveryTime: 38,
        costForTwo: 40000,
        cloudinaryImageId: "g0isknuhld1ltwxkjkcg",
    },
    {
        resName: "KFC",
        cuisine: ["Fast Food", "Burger", "American"],
        stars: "4.2 stars",
        deliveryTime: 25,
        costForTwo: 30000,
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    },
    {
        resName: "Domino's Pizza",
        cuisine: ["Pizza", "Italian", "Desserts"],
        stars: "4.1 stars",
        deliveryTime: 30,
        costForTwo: 35000,
        cloudinaryImageId: "21e7e5e45176da8b791c06a0ea555246",
    },
    {
        resName: "Empire Restaurant",
        cuisine: ["Biryani", "Kebabs", "South Indian"],
        stars: "4.3 stars",
        deliveryTime: 40,
        costForTwo: 45000,
        cloudinaryImageId: "f37dea51bb701e4fe80162e317982747",
    },
    {
        resName: "Truffles",
        cuisine: ["Cafe", "Burger", "Desserts"],
        stars: "4.5 stars",
        deliveryTime: 28,
        costForTwo: 50000,
        cloudinaryImageId: "5e19832da032dd69547565e27104706f",
    },
];

const Body = () => {
    return (
        <>
            <div className="body">
                <div className="search">Search</div>
                <div className="res-container">
                    {resData.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant.resName}
                            resData={restaurant}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

const AppLayout = () => {
    return (
        <>
            <div className="app">
                <Header />
                <Body />
            </div>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
