import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import img1 from "../../assets/media/1.jpg"
import img2 from "../../assets/media/2.jpg"
import img3 from "../../assets/media/3.jpg"
import img4 from "../../assets/media/4.jpg"
import img5 from "../../assets/media/5.jpg"
import img6 from "../../assets/media/6.jpg"
import img7 from "../../assets/media/7.jpg"
// import img8 from "../../assets/media/8.png"
// import {t} from "i18next";

import "../../assets/ProductCorusel.css"

const products = [
    { id: 1, name: "DUTOR ALT", img: img1, price: 150, type: "Clothes" },
    { id: 2, name: "KASHKAR RUBOB", img: img2, price: 300, type: "Bags" },
    { id: 3, name: "AN'ANAVIY DUTOR", img: img3, price: 250, type: "Bags" },
    { id: 4, name: "DUTOR", img: img4, price: 250, type: "Clothes" },
    { id: 5, name: "DOIRA", img: img5, price: 220, type: "Clothes" },
    { id: 6, name: "CHANG", img: img6, price: 350, type: "Bags" },
    { id: 7, name: "DUTOR", img: img7, price: 125, type: "Bags" },
    // { id: 8, name: "Ayollar ko'ylagi", img: img8, price: 37, type: "Clothes" },
];

const ProductCarousel = () => {
    return (
        <div id="Products">
            <Swiper
                modules={[Navigation, EffectCoverflow]}
                spaceBetween={150}
                centeredSlides={true} // Markazga olish
                navigation // Next va Prev tugmalari
                effect="coverflow" // Coverflow animatsiyasi
                coverflowEffect={{
                    rotate: 10,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                }}
                loop
                breakpoints={{
                    0: {            // Mobil
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    600: {          // Planshet
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {         // Desktop
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}

            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="product-card">
                            <img src={product.img} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductCarousel;
