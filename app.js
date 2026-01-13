import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

const Title = () => {
    return (
        <h1>Solanki's Kitchen</h1>
    )
};

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo-img" src="data:image/png;base64,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cdZP84lO/2mSSheyAgHj8/XLPHaJIRlEzpGk0kVlFw+9S4z7RNxrZ0wcXQcpM/TO0XOXGPdRRj2R61iyqgnaUEnXoX67xJDpOmntjGeOXrvEJJSghEiLSeahToaEoxfvp//nwtF4/MPflqjpvy1RU39bsoVWXp70NMIgO2jl8v5+eeIzIaFluOfL8h/5p/xUEYP8xjBhaGUsJfgPfpTLMGL64o8/LjC2Mn4ObywvPw6kl1dX05d301cX++XLi6vL/YurqauL78tTl+Wpu4vpS5joNCDV5ouhLX+bLk+XAQXWxOVy+W7533/C+zLii+ULGfBjoOXr27vLi9vLm/3vF7fX36eur29vr/f3l/+8uixf7V9ff7u63b+6vr7av7vGwwHaxc23f+/vr17c3Ezd/Odm+o+rH/bvLuHRxX++Td9827/59p8fbq4fw+oDaNflu+urm8vb6evvt5d3U7d3AGcZxFfe/35z/e0ag726vru9VaV2+e12v3x7V765u7r7tn9x83833+7gJnz/8+bi8uZy/+7m5vry22OAhhcWLBBYOKoaYdVS1wpeSOVpbQHKrwG05auLi6mp/YvLy/LFxcXlxfLl5RR+BK9fTn1f3p+C55cPB8dEZXn5qw/L+mPFUJSNQQrJa21qympfVFp2euPx03+by/570P8D2EDccIiPY34AAAAASUVORK5CYII="></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart 1</li>
                </ul>
            </div>
        </div>
    )
};

const RestaurntCard = (props) => {
  const {resData} = props;

  const {name, cuisines, avgRating, cloudinaryImageId} = resData?.info
    return (
        <div className="res-card">
          <img
            className="res-logo"
            alt="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
        </div>
    )
};

const resList = [
  {
    "info": {
      "id": "602334",
      "name": "Pizza Hut",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/0c133db3-abbb-4ecf-bd46-42a4fdb32849_602334.JPG",
      "locality": "Godadara Road",
      "areaName": "Parvat Patia",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4.3,
      "parentId": "721",
      "avgRatingString": "4.3",
      "totalRatingsString": "3.9K+",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-45 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-14 03:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹80 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/pizza-hut-godadara-road-parvat-patia-rest602334",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "152983",
      "name": "Jani Locho",
      "cloudinaryImageId": "nni5t4imm0m5odzlqav6",
      "locality": "Navyug College Road",
      "areaName": "Adajan Patiya",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Gujarati",
        "Snacks"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "22262",
      "avgRatingString": "4.5",
      "totalRatingsString": "9.3K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 6.2,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "6.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-13 20:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/jani-locho-navyug-college-road-adajan-patiya-rest152983",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "175281",
      "name": "Jalaram Locho & Khaman",
      "cloudinaryImageId": "ilmplqyvasqq0igkmobz",
      "locality": "Gotalawadi",
      "areaName": "Gotalawadi, Katargam",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Gujarati",
        "Snacks",
        "Fast Food",
        "Street Food",
        "Indian"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "230558",
      "avgRatingString": "4.5",
      "totalRatingsString": "4.6K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-13 19:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/big_rx.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹46"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/jalaram-locho-and-khaman-gotalawadi-gotalawadi-katargam-rest175281",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "424877",
      "name": "Dilliwale Pahelvanjee'S Cholle Bhature",
      "cloudinaryImageId": "tajbfx84hahoum5w9niz",
      "locality": "Moti Begumwadi",
      "areaName": "New Textile Market",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Punjabi",
        "Street Food",
        "Fast Food"
      ],
      "avgRating": 4.7,
      "veg": true,
      "parentId": "289667",
      "avgRatingString": "4.7",
      "totalRatingsString": "11K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 2.7,
        "serviceability": "SERVICEABLE",
        "slaString": "30-40 mins",
        "lastMileTravelString": "2.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-13 18:15:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹125"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/dilliwale-pahelvanjees-cholle-bhature-moti-begumwadi-new-textile-market-rest424877",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "96048",
      "name": "Shree Sai Snacks And Fast Food",
      "cloudinaryImageId": "dbqj3eqdlxerbgwbknij",
      "locality": "Pal Gam",
      "areaName": "LP Savani Road",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South Indian",
        "Burgers",
        "Ice Cream",
        "Pizzas"
      ],
      "avgRating": 4.7,
      "veg": true,
      "parentId": "185558",
      "avgRatingString": "4.7",
      "totalRatingsString": "12K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 8.1,
        "serviceability": "SERVICEABLE",
        "slaString": "30-40 mins",
        "lastMileTravelString": "8.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-13 22:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            "description": "OnlyOnSwiggy"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "OnlyOnSwiggy",
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹59"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.4",
          "ratingCount": "1.5K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/shree-sai-snacks-and-fast-food-pal-gam-lp-savani-road-rest96048",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "401459",
      "name": "Radhe Dhokla-(Punjabi, Chinese, Thali & Biryani)",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/ae16d745-db9c-4287-a20a-4ab35a1990ef_401459.JPG",
      "locality": "Ring Road",
      "areaName": "Ring Road",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Gujarati",
        "Biryani",
        "Chinese",
        "North Indian",
        "Punjabi",
        "Indian",
        "Thalis"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "521471",
      "avgRatingString": "4.6",
      "totalRatingsString": "22K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-40 mins",
        "lastMileTravelString": "4.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-13 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Dhokla.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Dhokla.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/radhe-dhokla-punjabi-chinese-thali-and-biryani-ring-road-rest401459",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "773194",
      "name": "Kailash Sweets & Snacks",
      "cloudinaryImageId": "2c3e34864b51285e003176b1a898d844",
      "locality": "Varachha",
      "areaName": "Rajhans Point",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Sweets",
        "Desserts",
        "Fast Food"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "461053",
      "avgRatingString": "4.6",
      "totalRatingsString": "5.4K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-13 21:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Mithai.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/big_rx.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Mithai.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹49"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/kailash-sweets-and-snacks-varachha-rajhans-point-rest773194",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "374649",
      "name": "Jani Locho & Khaman House",
      "cloudinaryImageId": "vn96jeij28eoo0cpm343",
      "locality": "Mahalaxmi Shopping Square",
      "areaName": "Pal Gam",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Indian",
        "Gujarati",
        "Snacks",
        "Street Food"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "7626",
      "avgRatingString": "4.5",
      "totalRatingsString": "1.0K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 7.9,
        "serviceability": "SERVICEABLE",
        "slaString": "30-40 mins",
        "lastMileTravelString": "7.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-13 13:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹200 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/jani-locho-and-khaman-house-mahalaxmi-shopping-square-pal-gam-rest374649",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "65838",
      "name": "Thalaivaa",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/8/ef558e38-a35e-47f2-97bd-085ce1ce6fac_65838.jpg",
      "locality": "City Light",
      "areaName": "City Light",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "South Indian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.7,
      "parentId": "5746",
      "avgRatingString": "4.7",
      "totalRatingsString": "6.2K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 7.5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "7.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-13 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.3",
          "ratingCount": "2.1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/thalaivaa-city-light-rest65838",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "780907",
      "name": "Theobroma",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/6/aea8da3b-fea8-411b-86df-fa6435945a4a_780907.JPG",
      "locality": "Katargam",
      "areaName": "Katargam",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "avgRating": 4.6,
      "parentId": "1040",
      "avgRatingString": "4.6",
      "totalRatingsString": "749",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 4.1,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "4.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-14 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.7",
          "ratingCount": "88"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/theobroma-katargam-rest780907",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "580689",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/518df35c-e945-4dc9-9ad2-103df2df0609_580689.jpg",
      "locality": "laxmi enclave",
      "areaName": "Katargam",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.4,
      "parentId": "166",
      "avgRatingString": "4.4",
      "totalRatingsString": "12K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 4.1,
        "serviceability": "SERVICEABLE",
        "slaString": "30-40 mins",
        "lastMileTravelString": "4.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-14 05:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹59"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/burger-king-laxmi-enclave-katargam-rest580689",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "395900",
      "name": "McDonald's",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/4782c11e-1972-43f4-b81b-bf6a1d2812aa_395900.JPG",
      "locality": "laxmi enclave",
      "areaName": "Katargam",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.5,
      "parentId": "630",
      "avgRatingString": "4.5",
      "totalRatingsString": "7.7K+",
      "sla": {
        "deliveryTime": 44,
        "lastMileTravel": 4.1,
        "serviceability": "SERVICEABLE",
        "slaString": "41-46 mins",
        "lastMileTravelString": "4.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-13 11:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹399",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/mcdonalds-laxmi-enclave-katargam-rest395900",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "75527",
      "name": "Subway",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/23ddc85d-6653-46a5-9ecf-0f0bb4182b5d_75527.jpg",
      "locality": "Zircon Plus",
      "areaName": "Katargam",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "sandwich",
        "Salads",
        "wrap",
        "Healthy Food"
      ],
      "avgRating": 4.4,
      "parentId": "2",
      "avgRatingString": "4.4",
      "totalRatingsString": "8.1K+",
      "sla": {
        "deliveryTime": 49,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "46-51 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-13 11:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹69"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.0",
          "ratingCount": "1.0K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/subway-zircon-plus-katargam-rest75527",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "533393",
      "name": "Maakhan Bhog",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/23/0d35e0de-2a55-4eb6-be4c-4582463e9786_533393.JPG",
      "locality": "Varachha",
      "areaName": "Rajhans Point",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Sweets",
        "dessert",
        "Snacks",
        "Cakes & Pastries",
        "Indian",
        "North Indian"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "6999",
      "avgRatingString": "4.4",
      "totalRatingsString": "1.5K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-13 21:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Mithai.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/big_rx.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Mithai.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹29"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/maakhan-bhog-varachha-rajhans-point-rest533393",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "692412",
      "name": "Tea Post",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/28/ec7ee18f-db69-4cb1-a4d4-555f2e385844_692412.jpg",
      "locality": "Athwa",
      "areaName": "Athwa",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Fast Food",
        "Beverages",
        "Coffee"
      ],
      "avgRating": 4.4,
      "parentId": "4509",
      "avgRatingString": "4.4",
      "totalRatingsString": "885",
      "sla": {
        "deliveryTime": 44,
        "lastMileTravel": 7,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "7.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-13 23:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.0",
          "ratingCount": "13"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/tea-post-athwa-rest692412",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "105629",
      "name": "Jalaram Khaman House",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/23/6ae855fb-2e75-4c71-9f1a-738ebea91f8f_105629 (1).jpg",
      "locality": "Sagrampura",
      "areaName": "Adajan",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Gujarati",
        "Fast Food",
        "Snacks",
        "Street Food",
        "Indian"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "7625",
      "avgRatingString": "4.3",
      "totalRatingsString": "1.2K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 8.1,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "8.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-13 20:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            "description": "OnlyOnSwiggy"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "OnlyOnSwiggy",
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.3",
          "ratingCount": "807"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/jalaram-khaman-house-sagrampura-adajan-rest105629",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "428839",
      "name": "Starbucks Coffee",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/22/8951cee4-a2f0-44c5-b7c3-8ae0e293f3f0_428839.JPG",
      "locality": "Adajan Gam",
      "areaName": "Adajan Gam",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream"
      ],
      "avgRating": 4.6,
      "parentId": "195515",
      "avgRatingString": "4.6",
      "totalRatingsString": "1.8K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 7.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "7.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-13 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
            "description": "Delivery!"
          },
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
                }
              },
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹85 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.4",
          "ratingCount": "1.2K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/starbucks-coffee-adajan-gam-rest428839",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "236083",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/7de6463b-231c-489c-91fe-ca04e466de3d_236083.JPG",
      "locality": "LP Savani Road",
      "areaName": "Adajan Gam",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      "avgRating": 4.2,
      "parentId": "547",
      "avgRatingString": "4.2",
      "totalRatingsString": "9.4K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 7.6,
        "serviceability": "SERVICEABLE",
        "slaString": "30-40 mins",
        "lastMileTravelString": "7.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-14 03:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/kfc-lp-savani-road-adajan-gam-rest236083",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "395356",
      "name": "McDonald's Gourmet Burger Collection",
      "cloudinaryImageId": "lc3nzvveoffmj6jjsjlk",
      "locality": "Reliance Mega Mall",
      "areaName": "Udhana Darwaja",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.5,
      "parentId": "10761",
      "avgRatingString": "4.5",
      "totalRatingsString": "361",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 4.4,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "4.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-13 23:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/mcdonalds-gourmet-burger-collection-reliance-mega-mall-udhana-darwaja-rest395356",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "193557",
      "name": "LunchBox - Meals and Thalis",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/36db4743-45f8-4bcd-a69d-0be3d3ef9d2c_193557.jpg",
      "locality": "Nr Navyug College, Rander Road",
      "areaName": "Adajan Patiya",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Thalis",
        "North Indian",
        "Biryani"
      ],
      "avgRating": 4.4,
      "parentId": "4925",
      "avgRatingString": "4.4",
      "totalRatingsString": "5.8K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 5.6,
        "serviceability": "SERVICEABLE",
        "slaString": "30-40 mins",
        "lastMileTravelString": "5.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-13 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "High%20Protein/rx%20tag%205.png",
            "description": "High Protein"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "High Protein",
                  "imageId": "High%20Protein/rx%20tag%205.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹79"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-50a01caa-41f4-4e15-b8a5-291efd27a23a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/lunchbox-meals-and-thalis-nr-navyug-college-rander-road-adajan-patiya-rest193557",
      "type": "WEBLINK"
    }
  }
];

const firstElement = resList[2];

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
              {resList.map((restaurant, index) => (
                <RestaurntCard key={restaurant.info.id} resData={restaurant} />
              ))}
            </div>
        </div>
    )
};

const Footer = () => {
    return (
        <div className="footer">
            This is Footer !!
        </div>
    )
};

const AppLayout = () => {
    return (
        <div className="app">
            {/* Header */}
            <Header />
            
            {/* Body */}
            <Body />

            {/* Footer */}
            <Footer />
        </div>
    )
};

root.render(<AppLayout />);