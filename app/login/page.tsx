import Image from "next/image";
import campaignLogo from "../../public/Recurso 1.svg";
import LoginComponent from "../components/loginComponent";

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen justify-center p-7">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <Image alt="campaing_logo" src={campaignLogo} className="w-[500px]" />
        </div>
        <div className="flex flex-col text-center pb-10">
          <h1 className="text-4xl font-bold py-5">
            Accede al Evento Virtual Aquí
          </h1>
          <p className="text-m pt-8">
            Ingresa tu correo para acceder al LOBBY y disfrutar toda la
            experiencia de Nombre del Lanzamiento
          </p>
          <h5 className="text-xl text-purple-600 font-semibold">
            (Usa el MISMO correo con el que compraste tu ticket)
          </h5>
        </div>
        <LoginComponent />
        <p className="text-center text-sm pt-5">
          Haz click aqui para comunicarte con nuestro equipo
        </p>
        <div className="flex flex-col bg-purple-500 w-[350px] text-center py-2 rounded-full self-center mt-2">
          <a href="">COMUNICATE CON SOPORTE</a>
        </div>
      </div>
    </div>
  );
}
