import Image from "next/image";
import campaingLogo from "../../public/Recurso 1.svg";
import sampleIMG1 from "../../public/279.jpg";
import UseSessionStorage from "../hooks/useSessionStorage";

export default function Internal() {
  return (
    <main className="min-h-screen items-center justify-between">
      <UseSessionStorage name="session" />
      <div className="flex flex-col min-h-screen">
        <div
          id="initial"
          className="flex flex-col px-[20px] pt-[28px] pb-[50px] gap-5"
        >
          <div className="flex justify-center">
            <Image
              alt="campaing_logo"
              src={campaingLogo}
              className="w-[500px]"
            />
          </div>
          <div className="flex justify-center">
            <iframe
              className="w-[800px] h-[50vw] max-h-[450px]"
              src="https://www.youtube.com/embed/xrRDlOWR1OU?si=kqL3Oa0NCwfGrwkj"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div
            id="class_container"
            className="flex flex-row gap-5 pt-[20px] pb-[50px] flex-wrap justify-center overflow-hidden"
          >
            <div className="card">
              <div className="poster">
                <Image
                  src={sampleIMG1}
                  alt="firstImage"
                  className="h-[250px]"
                />
              </div>
              <div className="details">
                <h1 className=" text-blue-400">Titulo</h1>
                <h2 className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h2>
                <button className="px-4 py-2 border-white border rounded-full hover:bg-white hover:text-black mt-1">
                  Acceder
                </button>
              </div>
            </div>
            <div className="card">
              <div className="poster">
                <Image
                  src={sampleIMG1}
                  alt="firstImage"
                  className="h-[250px]"
                />
              </div>
              <div className="details">
                <h1 className=" text-blue-400">Titulo</h1>
                <h2 className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h2>
                <button className="px-4 py-2 border-white border rounded-full hover:bg-white hover:text-black mt-1">
                  Acceder
                </button>
              </div>
            </div>
            <div className="card">
              <div className="poster">
                <Image
                  src={sampleIMG1}
                  alt="firstImage"
                  className="h-[250px]"
                />
              </div>
              <div className="details">
                <h1 className=" text-blue-400">Titulo</h1>
                <h2 className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h2>
                <button className="px-4 py-2 border-white border rounded-full hover:bg-white hover:text-black mt-1">
                  Acceder
                </button>
              </div>
            </div>
            <div className="card">
              <div className="poster">
                <Image
                  src={sampleIMG1}
                  alt="firstImage"
                  className="h-[250px]"
                />
              </div>
              <div className="details">
                <h1 className=" text-blue-400">Titulo</h1>
                <h2 className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h2>
                <button className="px-4 py-2 border-white border rounded-full hover:bg-white hover:text-black mt-1">
                  Acceder
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white px-[20px] pt-[28px] pb-[60px]">
          <div className="flex flex-col md:flex-row justify-center gap-24">
            <div className="md:max-w-[750px]">
              <div className="pt-[25px] pb-[50px]">
                <h2 className="text-purple-600 text-4xl mb-5 md:mb-7 font-bold">
                  Lorem ipsum dolor sit amet
                </h2>
                <p className="mb-5 md:mb-7 text-gray-500 text-m">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <div className="py-[13px] rounded-full bg-purple-500 text-center max-w-[400px] flex flex-col">
                  <a href="" className="font-semibold">
                    BOTON DE EJEMPLO
                  </a>
                </div>
              </div>
              <div>
                <h2 className="text-purple-600 text-4xl mb-5 md:mb-7 font-bold">
                  Lorem ipsum dolor sit amet
                </h2>
                <Image
                  src={sampleIMG1}
                  alt="material"
                  className="mb-5 md:mb-7 md:max-w-[450px]"
                />
                <p className="mb-5 md:mb-3 text-gray-700 text-m">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <br />
                <div className="py-[13px] rounded-full bg-purple-500 text-center max-w-[400px] flex flex-col">
                  <a href="" className="font-semibold">
                    BOTON DE DESCARGA
                  </a>
                </div>
              </div>
            </div>
            <div className="md:ml-8 md:max-w-[410px]">
              <div className="rounded-3xl border-[3px] border-purple-600 text-center p-[25px] mb-4">
                <h2 className="text-2xl text-purple-700 mb-5">
                  AGENDA DEL EVENTO
                </h2>
                <p className="text-m text-gray-700 mb-5">
                  La puntualidad es clave para que puedas sacarle el máximo
                  provecho a este evento. Recuerda los horarios:
                </p>

                <ul className="list-disc pl-5 text-left text-black mb-5">
                  <li className="m-2">
                    <strong>DÍA 1: MARTES 28/ FEBRERO:</strong>
                    <br />
                    9.00 am a 7.00 pm (Hora Colombia)
                  </li>
                  <li className="m-2">
                    <strong>DÍA 2: MARTES 29/ FEBRERO:</strong>
                    <br />
                    9.00 am a 7.00 pm (Hora Colombia)
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl bg-gray-200 p-[25px] mb-3">
                <h2 className="text-2xl text-purple-700 mb-5">
                  Verifica tu horario Local:
                </h2>
                <ul className="list-disc pl-5 text-left text-black mb-5">
                  <li className="m-2">
                    <strong>ITEM: </strong>
                    Informacion
                  </li>
                  <li className="m-2">
                    <strong>ITEM: </strong>
                    Informacion
                  </li>
                  <li className="m-2">
                    <strong>ITEM: </strong>
                    Informacion
                  </li>
                  <li className="m-2">
                    <strong>ITEM: </strong>
                    Informacion
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl border-[3px] border-purple-600 text-center p-[25px] mb-4 mt-5">
                <h2 className="text-2xl text-purple-700 mb-5">
                  CUADRO DE INFORMACION
                </h2>
                <Image src={sampleIMG1} alt="material" className="mb-5" />
                <p className="mb-5 text-gray-700 text-m">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[25px] pt-[25px] bg-white text-center">
          <h6 className="text-black mb-[30px] text-sm">COPYRIGHT INFO</h6>
        </div>
      </div>
    </main>
  );
}
