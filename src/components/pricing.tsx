"use client";

import { useState } from "react";

const planes = [
  {
    id: 1,
    title: "Pacientes",
    plans: [
      {
        id: 1,
        title: "Plan Gratuito",
        price: 0,
        description: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        ],
      },
      {
        id: 2,
        title: "Plan Premium",
        price: 200,
        description: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Clinicas",
    plans: [
      {
        id: 1,
        title: "Plan Estándar",
        price: 100,
        description: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        ],
      },
      {
        id: 2,
        title: "Plan Premium",
        price: 300,
        description: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Laboratorios",
    plans: [
      {
        id: 1,
        title: "Plan Estándar",
        price: 100,
        description: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        ],
      },
      {
        id: 2,
        title: "Plan Premium",
        price: 300,
        description: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        ],
      },
    ],
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <section className="relative container mx-auto px-2 py-12 grid place-items-center">
      <h2 className="text-2xl font-bold tracking-tight sm:text-4xl text-center mb-4">
        Planes
      </h2>
      <div className="flex gap-x-4 mb-4">
        {planes.map((plan, index) => (
          <button
            key={index}
            className={` py-2 px-4 rounded-3xl font-medium  text-xl ${
              selectedPlan === plan.id
                ? "bg-[#562CB4] text-white"
                : "border border-[#562CB4] text-[#562CB4]"
            }`}
            onClick={() => setSelectedPlan(index + 1)}
          >
            {plan.title}
          </button>
        ))}
      </div>
      <div className="flex md:flex-row flex-col gap-4">
        <article className="bg-gradient-to-t from-[#562CB4] to-[#34A5AB] rounded-lg p-1 text-black max-w-96">
          <div className="bg-white w-full rounded-[4px] p-11 flex flex-col">
            <h3 className="text-lg font-semibold">
              {planes[selectedPlan - 1].plans[0].title}
            </h3>
            <p className="text-4xl font-bold mb-12">
              ${planes[selectedPlan - 1].plans[0].price}
            </p>
            <ul>
              {planes[selectedPlan - 1].plans[0].description.map(
                (item, index) => (
                  <li key={index} className="text-sm">
                    {item}
                  </li>
                )
              )}
            </ul>
            <button className="py-2 px-4 bg-gradient-to-l from-[#562CB4] to-[#34A5AB] text-white rounded-3xl self-center mt-12">Obtener Plan</button>
          </div>
        </article>
        <article className="bg-[#562CB4] rounded-lg p-12 text-white max-w-96 flex flex-col">
          <h3 className="text-lg font-semibold">
            {planes[selectedPlan - 1].plans[1].title}
          </h3>
          <p className="text-4xl font-bold mb-12">${planes[selectedPlan - 1].plans[1].price}</p>
          <ul>
            {planes[selectedPlan - 1].plans[1].description.map(
              (item, index) => (
                <li key={index} className="text-sm">
                  {item}
                </li>
              )
            )}
          </ul>
          <button className="py-2 px-4 bg-white border border-[#562CB4] text-[#562CB4] rounded-3xl self-center mt-12">Obtener Plan</button>
        </article>
      </div>
    </section>
  );
};

export default Pricing;
