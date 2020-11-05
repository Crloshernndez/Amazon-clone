import React from "react";
import "../styles/Home.css";
import Product from "../component/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="HERO"
        />
        <div className="home__row">
          <Product
            id={1}
            title="informacion del producto"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id={2}
            title="Altavoz Bluetooth + SoundLink de giro con/sin base de carga Triple negro"
            price={299}
            image="https://m.media-amazon.com/images/I/81To0nRciPL._AC_UL320_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="Apple 13in MacBook Pro, Retina Display, 2.3GHz Intel Core i5 Dual Core, 8GB RAM, 128GB SSD, Space Grey, MPXQ2LL/A (Renovado)"
            price={858}
            image="https://m.media-amazon.com/images/I/71nM55mRvxL._AC_UY218_.jpg"
            rating={3}
          />
          <Product
            id={4}
            title="Apple Watch Serie 3 con GPS"
            price={299.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71vCuRn4CkL._AC_SX425_.jpg"
            rating={5}
          />
          <Product
            id={5}
            title="Sceptre C275W-1920RN - Monitor LED curvado (27 pulgadas, 75 Hz, HDMI, VGA, altavoces integrados, metal sin bordes), color negro"
            price={168}
            image="https://m.media-amazon.com/images/I/914W+OtJQ-L._AC_UY218_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="Thrustmaster 4060104 Auriculares para videojuegos T. Flight U.S. Air Force Edition (negro) 4060104 【Productos originales japoneses domésticos】"
            price={89}
            image="https://m.media-amazon.com/images/I/81K7A3HdVWL._AC_UY218_.jpg"
            rating={1}
          />
          <Product
            id={7}
            title="Paquete de discos duros insignia Microsoft Xbox One S de 1 TB con dos controladores inalámbricos (2X), prueba de 1 mes de pases de juego, prueba de Xbox Live Gold de 14 días, color blanco
          por Xbox"
            price={419}
            image="https://m.media-amazon.com/images/I/712OxBPxn7L._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
