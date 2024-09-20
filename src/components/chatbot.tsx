"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";

const Chatbot = () => {
  const [res, setRes] = useState("");
  const [isPending, startTransition] = useTransition();

  const onClick = async () => {
    startTransition(async () => {
      const dataForm = new FormData();
      dataForm.append("topic", "Hola");
      try {
        const data = await axios.post(
          "https://b-care-b.onrender.com/Recommendation",
          dataForm
        );
        if (data.data?.Message) {
          setRes(data.data.Message);
        }
      } catch (error) {
        setRes("Intenta de nuevo");
        console.log(error)
      }
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 py-12 px-2 container mx-auto place-items-center">
      {/* Text Section */}
      <div className="w-full mb-8 md:mb-0 text-center md:text-left max-w-sm">
        <h2 className="text-2xl font-bold tracking-tight sm:text-4xl mb-8">
          Gestiona tus citas fácilmente
        </h2>
        <p className="text-gray-600 mb-10">
          Con nuestro chatbot, puedes agendar, revisar y modificar tus citas
          médicas de manera fácil y rápida. Simplifica tu experiencia y mantén
          el control de tu salud desde cualquier lugar.
        </p>
        <Link
          href="/demo"
          className="py-3 px-6 bg-gradient-to-r from-[#562CB4] to-[#34A5AB] text-white rounded-3xl text-xl font-semibold transition hover:opacity-40"
        >
          Iniciar Chat
        </Link>
      </div>

      {/* Image Section */}
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/chatbot.png"
          alt="Chatbot Illustration"
          width={200}
          height={500}
          className="w-auto h-full max-h-96"
        />
        <button
          onClick={onClick}
          disabled={isPending}
          className="py-3 px-6 bg-gradient-to-r from-[#562CB4] to-[#34A5AB] text-white rounded-3xl text-xl font-semibold transition hover:opacity-40 mt-8"
        >
          ¡Haz una pequeña pueba!
        </button>
        <p className="max-w-[60ch] mt-4">{res}</p>
      </div>
    </div>
  );
};

export default Chatbot;
