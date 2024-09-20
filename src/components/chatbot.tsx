// components/ChatSection.js
import Image from 'next/image';
import chatBotImage from '../../public/chatbot.png'; // Make sure to place your image in the public folder

const Chatbot = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center space-x-20 py-28">
        {/* Text Section */}
        <div className="md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">Gestiona tus citas fácilmente</h1>
            <p className="text-gray-600 mb-10">
            Con nuestro chatbot, puedes agendar, revisar y modificar tus citas médicas de manera fácil y rápida. Simplifica tu experiencia y mantén el control de tu salud desde cualquier lugar.
            </p>
            <button className="bg-teal-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-teal-600 transition">
            Iniciar Chat
            </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/4 flex justify-center">
            <Image src={chatBotImage} alt="Chatbot Illustration" width={200} height={500} className="w-80 h-auto" />
        </div>
    </div>
  );
}


export default Chatbot;
