"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useRef, useState, useTransition } from "react";

type Chat = {
  from: "user" | "bot";
  message: string;
};

const DemoPage = () => {
  const [chats, setChats] = useState<Chat[]>([
    {
      from: "bot",
      message: "Hola, ¿en qué puedo ayudarte?",
    },
  ]);

  const formRef = useRef<HTMLFormElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null); // Referencia al último mensaje

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chats]);

  const onSubmit = (data: FormData) => {
    const message = data.get("prompt") as string;

    if (!message.trim()) {
      return;
    }

    setChats((prevChats) => [
      ...prevChats,
      {
        from: "user",
        message: message,
      },
    ]);

    startTransition(async () => {
      const res = await axios.post(
        "https://b-care-b.onrender.com/ChatBot",
        data
      );

      if (res.data?.Message) {
        setChats((prevChats) => [
          ...prevChats,
          {
            from: "bot",
            message: res.data.Message,
          },
        ]);
      } else {
        setChats((prevChats) => [
          ...prevChats,
          {
            from: "bot",
            message: "No puedo responder a eso.",
          },
        ]);
      }
    });
    formRef.current?.reset();
  };

  return (
    <main className="h-screen w-full px-2 py-8">
      <section className="container mx-auto h-full flex flex-col">
        <div ref={chatRef} className="h-full overflow-y-auto">
          {chats.map((chat, index) => (
            <div
              key={index}
              ref={index === chats.length - 1 ? lastMessageRef : null} // Asignamos la referencia al último mensaje
              className={`${
                chat.from === "bot" ? "text-left" : "text-right"
              } mb-4`}
            >
              <div
                className={`${
                  chat.from === "bot"
                    ? "bg-gray-300 text-black"
                    : "bg-blue-500 text-white"
                } p-4 rounded-lg inline-block`}
              >
                {chat.message}
              </div>
            </div>
          ))}
        </div>
        <form action={onSubmit} ref={formRef} className="flex">
          <Link href="/" className="bg-green-500 text-white px-4 py-2 rounded-lg text-nowrap flex items-center">
            Regresa al inicio
          </Link>
          <input
            type="text"
            name="prompt"
            className="w-full p-4 border-2 border-gray-300 rounded-lg"
            placeholder="Escribe un mensaje..."
            disabled={isPending}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            disabled={isPending}
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
};

export default DemoPage;
