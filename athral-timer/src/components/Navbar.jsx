import { useState } from "react";
import logo from "../assets/athral-img.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="background-p text-white">
      <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo alineado a la izquierda y más grande */}
          <div className="flex-shrink-0 mr-4">
            <a href="/">
              <img
                className="h-14 w-auto max-w-xs mr-auto"
                src={logo}
                alt="Athral Logo"
                style={{ objectFit: "contain" }}
              />
            </a>
          </div>
          <div className="text-2xl font-bold text-center">
            <span>Athral - Timer</span>
          </div>

          {/* Botón hamburguesa */}
          <div className="md:flex ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden¿ px-2 pt-2 pb-3 space-y-1">
          <a href="/" className="block px-3 py-2 rounded hover:bg-gray-700">
            Inicio
          </a>
          <a
            href="/servicios"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            Servicios
          </a>
          <a
            href="/contacto"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
