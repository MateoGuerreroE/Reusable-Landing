"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginComponent() {
  const router = useRouter();
  useEffect(() => {
    const session = window.sessionStorage.getItem("session");
    if (session) router.push("/campaign-name");
  }, []);
  const [email, setEmail] = useState<string>("");
  const [disclaimer, setDisclaimer] = useState<boolean>(false);
  const [errors, setErrors] = useState<string>("missing");

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(e.target.value);
    setErrors(emailRegex.test(e.target.value) ? "" : "Email incorrecto");
  }

  function handleSubmit() {
    if (typeof window !== undefined) {
      sessionStorage.setItem("session", email);
      router.push("campaign-name");
    }
  }

  return (
    <div className="my-5 flex justify-center">
      <div className="flex flex-col w-[500px] bg-slate-300 bg-opacity-20 p-10 pt-7 mx-2 rounded-md">
        <label className="mb-3">Correo: </label>
        <input
          type="text"
          className="p-3 pl-7 text-black rounded-full mb-2"
          onChange={handleChange}
        />
        <div className="pl-2 text-sm mb-5">
          <input
            className="m-1 mr-2"
            type="checkbox"
            onChange={() => {
              setDisclaimer((state) => !state);
            }}
          />
          Aca va el disclaimer necesario para recoger los datos, permitir
          grabar, etc
        </div>
        <button
          className={`font-semibold text-center  w-[150px] p-2 rounded-full self-center ${
            Boolean(errors) || !disclaimer
              ? "bg-gray-500"
              : "bg-purple-500 hover:bg-white hover:text-black"
          }`}
          onClick={handleSubmit}
          disabled={Boolean(errors) || !disclaimer}
        >
          INGRESAR
        </button>
      </div>
    </div>
  );
}
