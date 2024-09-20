"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

// Import Swiper styles
import "swiper/css";

import Image from "next/image";

const cards = [
  {
    asset: "/barrios.webp",
    title: "Lizeth Barrios",
    subtitle: "Oncologa",
    content: `"Encuentro muy útil contar con la información y el progreso de los pacientes de cancér en un solo lugar."`,
  },
  {
    asset: "/vega.webp",
    title: "Valeria Vega",
    subtitle: "Enfermera",
    content: `"Esta aplicación facilitaría el proceso de seguimiento a la hora de tratar con pacientes, ya que muchas veces es complicado dar continuidad a su evolución."`,
  },
];

const Testimonial = () => {
  // Ref para controlar el Swiper
  const swiperRef = useRef<SwiperCore | null>(null);

  // Estado para manejar el índice actual del Swiper
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex);
  return (
    <section className="relative container mx-auto px-2 py-8 grid place-items-center">
      <h2 className="text-2xl font-bold tracking-tight sm:text-4xl text-center mb-4">
        Testimonios
      </h2>
      <Swiper
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gradient-to-tr from-[#6DFFD6] to-[#34A5AB] rounded-3xl p-1 h-3/4">
              <div className="bg-white rounded-[20px] h-full w-full md:pl-44 p-2 flex items-center justify-center">
                <div className="bg-[#34A5AB] rounded-[12px] md:absolute top-0 left-3 flex flex-col h-full md:h-auto justify-evenly items-center p-2 text-white mr-2">
                  <div className="rounded-full bg-white size-20 md:size-28 mb-2 p-1">
                    <Image
                      src={card.asset}
                      width={112}
                      height={112}
                      alt={card.title}
                      className="rounded-full object-top"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-nowrap">
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-sm">{card.subtitle}</p>
                </div>
                <p className="text-xs sm:text-base md:text-lg tracking-tight">
                  {card.content}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
