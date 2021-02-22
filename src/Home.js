import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood Mixing Bowl, Stainless Steel Bowl Chef Elite Food Processor Accessories Stainless Steel Bowl Titanium XL SS Bowl 6,7 Liter Silver"
            image="https://m.media-amazon.com/images/I/612N8I2i9rL._AC_UY327_FMwebp_QL65_.jpg"
            price={122.18}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung Electronics UN32N5300AFXZA 32' 1080p Smart LED TV (2018), Black"
            image="https://m.media-amazon.com/images/I/91UsHjAPTlL._AC_UL480_FMwebp_QL65_.jpg"
            price={237.99}
            rating={5}
          />
          <Product
            id="90829332"
            title="Echo Dot (3rd Gen) bundle with Amazon Smart Plug - Charcoal"
            image="https://m.media-amazon.com/images/I/51oAPLRW9DL._AC_UL480_FMwebp_QL65_.jpg"
            price={35.99}
            rating={4}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            image="https://m.media-amazon.com/images/I/81FH2j7EnJL._AC_UY327_FMwebp_QL65_.jpg"
            price={598.99}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="23445930"
            title="Willful Smart Watch for Android Phones and iOS Phones Compatible iPhone Samsung, IP68 Swimming Waterproof Smartwatch Fitness Tracker Fitness Watch Heart Rate Monitor Smart Watches for Men Women Black"
            image="https://m.media-amazon.com/images/I/618b7IUpXHL._AC_UY327_FMwebp_QL65_.jpg"
            price={64.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
