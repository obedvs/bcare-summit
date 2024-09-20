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
        price: "0",
        description: [
          "Administración de datos personales.",
          "Historial de citas y tratamientos.",
          "Acceso en cualquier momento.",
        ],
      },
      {
        id: 2,
        title: "Plan Premium",
        price: "$500/año",
        description: ["Escaneo de documentos médicos."],
      },
    ],
  },
  {
    id: 2,
    title: "Hospitales",
    plans: [
      {
        id: 1,
        title: "Plan Estándar",
        price: "$100,000/año",
        description: [
          "Acceso a IA",
          "Número limitado de pacientes.",
          "Número limitado de doctores.",
          "Soporte 24/7.",
        ],
      },
      {
        id: 2,
        title: "Plan Premium",
        price: "Contactar",
        description: [
          "Acceso a todos los pacientes necesarios.",
          "Acceso a todos los doctores necesarios.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Doctores",
    plans: [
      {
        id: 1,
        title: "Plan Estándar",
        price: "0",
        description: [
          "Oportunidad de provar la plataforma.",
          "Numero limitado de pacientes.",
          "Acceso a IA",
        ],
      },
      {
        id: 2,
        title: "Plan Premium",
        price: "Contactar",
        description: [
          "Acceso a todos los pacientes necesarios.",
          "Soporte 24/7.",
        ],
      },
    ],
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <section className="relative container mx-auto px-2 py-8 grid place-items-center">
      <h2 className="text-2xl font-bold tracking-tight sm:text-4xl text-center mb-4">
        Planes
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
        {planes.map((plan, index) => (
          <button
            key={index}
            className={`min-w-[147.95px] flex items-center justify-center py-2 px-4 rounded-3xl font-medium text-lg ${
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
        <article className="bg-gradient-to-t from-[#562CB4] to-[#34A5AB] rounded-lg p-1 text-black w-full max-w-72">
          <div className="bg-white w-full rounded-[4px] p-11 flex flex-col">
            <h3 className="text-lg font-semibold">
              {planes[selectedPlan - 1].plans[0].title}
            </h3>
            <p className="text-2xl font-bold mb-12">
              {planes[selectedPlan - 1].plans[0].price}
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
            <button className="py-2 px-4 bg-gradient-to-l from-[#562CB4] to-[#34A5AB] text-white rounded-3xl self-center mt-12">
              Obtener Plan
            </button>
          </div>
        </article>
        <article className="bg-[#562CB4] rounded-lg p-12 text-white w-full max-w-72 flex flex-col">
          <h3 className="text-lg font-semibold">
            {planes[selectedPlan - 1].plans[1].title}
          </h3>
          <p className="text-2xl font-bold mb-12">
            {planes[selectedPlan - 1].plans[1].price}
          </p>
          <ul>
            {planes[selectedPlan - 1].plans[1].description.map(
              (item, index) => (
                <li key={index} className="text-sm">
                  {item}
                </li>
              )
            )}
          </ul>
          <button className="py-2 px-4 bg-white border border-[#562CB4] text-[#562CB4] rounded-3xl self-center mt-12">
            Obtener Plan
          </button>
        </article>
      </div>
    </section>
  );
};

export default Pricing;
