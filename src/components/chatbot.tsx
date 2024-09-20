// components/ChatSection.js
import Image from 'next/image';

const Chatbot = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 py-12 px-2 container mx-auto place-items-center">
        {/* Text Section */}
        <div className="w-full mb-8 md:mb-0 text-center md:text-left max-w-sm">
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl mb-8">Gestiona tus citas fácilmente</h2>
            <p className="text-gray-600 mb-10">
            Con nuestro chatbot, puedes agendar, revisar y modificar tus citas médicas de manera fácil y rápida. Simplifica tu experiencia y mantén el control de tu salud desde cualquier lugar.
            </p>
            <button className="bg-teal-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-teal-600 transition">
            Iniciar Chat
            </button>
        </div>

        {/* Image Section */}
            <Image src="/chatbot.png" alt="Chatbot Illustration" width={200} height={500} className="w-auto h-full max-h-96" />
    </div>
  );
}


export default Chatbot;
