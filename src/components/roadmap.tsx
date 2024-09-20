import { BsGraphUpArrow } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io5";
import { VscRobot } from "react-icons/vsc";

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-100 pointer-events-none"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex justify-around">
        <div className="py-6 md:py-10 flex flex-col justify-around">
          {/* Section header */}
          <div
            className="max-w-3xl mx-auto text-center md:mb-8"
          >
            <h2 className="text-2xl sm:text-4xl font-bold">
              Metas a Futuro
            </h2>
          </div>

          {/* Items */}
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mx-auto">
            <div className="timeline-step lg:mt-0 mt-12">
              <div className="timeline-icon border-q0 mb-14">
                <IoLogoAndroid
                  color="#6DFFD6"
                  size={64}
                  style={{ transform: "rotate(-45deg)" }}
                  className="svg-q0"
                />
              </div>
              <div className="timeline-info">
                <h4 className="h4 mb-2 text-[#6DFFD6]">Q1</h4>
                <div className="line bg-[#6DFFD6]"></div>
                <ul className="text-gray-600 text-left">
                  <li>Lanzamiento 1.0 multiplataforma (web, iOS, Android)</li>
                  <li>Servidores y servicios listos</li>
                  <li>Proyecto listo para su distribución</li>
                </ul>
              </div>
            </div>
            <div className="timeline-step lg:mt-24 mt-12">
              <div className="timeline-icon border-q1 mb-14">
                <BsGraphUpArrow
                  color="#2392F5"
                  size={64}
                  style={{ transform: "rotate(-45deg)" }}
                  className="svg-q1"
                />
              </div>
              <div className="timeline-info">
                <h4 className="h4 mb-2 text-[#2392F5]">Q2</h4>
                <div className="line bg-[#2392F5]"></div>
                <ul className="text-gray-600 text-left">
                  <li>Expansión del equipo.</li>
                  <li>Retorno de la inversión.</li>
                </ul>
              </div>
            </div>
            <div className="timeline-step lg:mt-0 mt-12">
              <div className="timeline-icon border-q2 mb-14">
                <VscRobot
                  color="#552CB3"
                  size={64}
                  style={{ transform: "rotate(-45deg)" }}
                  className="svg-q2"
                />
              </div>
              <div className="timeline-info">
                <h4 className="h4 mb-2 text-[#552CB3]">Q3</h4>
                <div className="line bg-[#552CB3]"></div>
                <ul className="text-gray-600 text-left">
                  <li>Lanzamiento de recomendaciones con Chatbot.</li>
                </ul>
              </div>
            </div>
            <div className="timeline-step lg:mt-24 mt-12">
              <div className="timeline-icon border-q3 mb-14">
                <FaBrain
                  color="#34A5AB"
                  size={64}
                  style={{ transform: "rotate(-45deg)" }}
                  className="svg-q3"
                />
              </div>
              <div className="timeline-info">
                <h4 className="h4 mb-2 text-[#34A5AB]">Q4</h4>
                <div className="line bg-[#34A5AB]"></div>
                <ul className="text-gray-600 text-left">
                  <li>
                    Lanzamiento de modelo de inteligencia artificial propio para
                    el Chatbot.
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-step lg:mt-0 mt-12">
              <div className="timeline-icon border-q4 mb-14">
                <FaDatabase
                  color="#90EDFF"
                  size={64}
                  style={{ transform: "rotate(-45deg)" }}
                  className="svg-q4"
                />
              </div>
              <div className="timeline-info">
                <h4 className="h4 mb-2 text-[#90EDFF]">Q5</h4>
                <div className="line bg-[#90EDFF]"></div>
                <ul className="text-gray-600 text-left">
                  <li>Lanzamiento banco de información.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
