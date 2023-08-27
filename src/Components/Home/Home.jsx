import React from "react";
import "./Home.css";
import Product from "../Product/Product.jsx";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


const items = [
  <img
    className="home__image"
    src="https://m.media-amazon.com/images/I/61t7D+IXSTL._SX3000_.jpg"
    alt="banner"
  />,
  <img
    className="home__image"
    src="https://m.media-amazon.com/images/I/71qUptobbzL._SX3000_.jpg"
    alt="banner"
  />,
  <img
    className="home__image "
    src="https://m.media-amazon.com/images/I/51j9Jz-VaKL._SX3000_.jpg"
    alt="banner"
  />,
  <img
    className="home__image "
    src="https://m.media-amazon.com/images/I/61HBeh4tctL._SX3000_.jpg"
    alt="banner"
  />,
  <img
    className="home__image"
    src="https://images-na.ssl-images-amazon.com/images/G/01/Banner_Images/XCM_Manual_1464696_US_CONSUMER-ELECTRONICS-CATEGORY-STOREFRONT-ID-11173541_1500x440_2_1c937117-002a-43be-86dd-52cae97a6fd0.jpg"
    alt="Handpicked TVs"
  />,
  <img
    className="home__image"
    src="https://m.media-amazon.com/images/I/71ylozpT1FL._SX3000_.jpg"
  />,
];

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        />

        <AliceCarousel
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={3500}
          animationDuration={3500}
          animationType="slideout"
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          items={items}
        />

        <div className="home__row__container">
          <div className="home__row">
            <Product
              id="1"
              title='HP 17.3" Flagship HD+ IPS Display Business Laptop Computer, Intel Quad Core i3 Processor, 16GB RAM, 1TB PCIe SSD, Bluetooth 5.1, HDMI, Webcam, Numpad, USB-A&C, Win 11, Silver, w/GM Accessories'
              price={599.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/61ti9m-Z1+L._AC_SX466_.jpg"
            />
            <Product
              id="2"
              title="Rachael Ray Cucina Nonstick Cookware Pots and Pans Set, 12 Piece, Agave Blue"
              price={147.09}
              rating={5}
              image="https://m.media-amazon.com/images/I/91l5w1ylVzL._AC_SX425_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="3"
              title="SAMSUNG Galaxy S23 Ultra Cell Phone, Factory Unlocked Android Smartphone, 512GB, 200MP Camera, Night Mode, Long Battery Life, S Pen, US Version, 2023, Lavender"
              price={1129.97}
              rating={3}
              image="https://m.media-amazon.com/images/I/718LuUVEOZL._AC_SX466_.jpg"
            />
            <Product
              id="4"
              title="Countertop Dishwasher, HAVA Portable Dishwashers with 5 L Built-in Water Tank & Inlet Hose, 6 Programs, Baby Care, Air-Drying Function for Small Apartments, Dorms and RVs"
              price={289.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/61y1RksyneL._AC_UL600_SR600,400_.jpg"
            />
            <Product
              id="5"
              title="Pompon Zinnia California Giant Mix Seeds Annual Flowers for Planting Giant Non GMO 100 Seeds"
              price={6.98}
              rating={4}
              image="https://m.media-amazon.com/images/I/61wfrdThjYL._AC_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="6"
              title="Ailun Glass Screen Protector Compatible for iPhone 11/iPhone XR, 6.1 Inch 3 Pack Tempered Glass"
              price={12.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/81MZ5D1wHpL._AC_UL480_QL65_.jpg"
            />
            <Product
              id="7"
              title="Amazon Basics Watercolor Paint Set Tubes, 24 Colors, Assorted"
              price={15.82}
              rating={5}
              image="https://m.media-amazon.com/images/I/71Z1U-MRZRL._SL1500_.jpg"
            />
            <Product
              id="8"
              title="Johnson & Johnson All-Purpose Portable Compact First Aid Kit for Minor Cuts, Scrapes, Sprains & Burns, Ideal for Home, Car, Travel, Camping and Outdoor Emergencies, 160 Pieces"
              price={17.48}
              rating={8}
              image="https://m.media-amazon.com/images/I/817vU1ZDWGL._AC_SX466_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="9"
              title="SAMSUNG 85-Inch Class Crystal UHD 4K CU8000 Series PurColor, Object Tracking Sound Lite, Q-Symphony, Motion Xcelerator, Ultra Slim, Solar Remote, Smart TV with Alexa Built-in (UN85CU8000, 2023 Model)"
              price={1496.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/91GMSrYPaHL._AC_UY218_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
