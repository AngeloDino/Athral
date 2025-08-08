import { useEffect, useState } from "react";

export const Timer = () => {
    const OPCIONES = [60, 50, 25, 5];

    const [tiempo, setTiempo] = useState({ minutos: 1, segundos: 0, count: 0 });
    const [activo, setActivo] = useState(false);

    useEffect(() => {
        if (!activo) return;
        
        const interval = setInterval(() => {
            setTiempo((prev) => {
                if (prev.segundos <= 0) {
                    if (prev.minutos <= 0) {
                        setActivo(false);
                        clearInterval(interval);
                        return {...prev, count: prev.count + 1};
                    }
                    return {...prev, minutos: prev.minutos - 1, segundos: 59 };
                }
                return { ...prev, segundos: prev.segundos - 1 };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [activo]);

    return (
        <div className="flex flex-col items-center justify-center box-border p-6 bg-gray-800 rounded-xl shadow-2xl w-80 mx-auto">
            <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg text-center">
                {`${tiempo.minutos
                    .toString()
                    .padStart(2, "0")
                    .split("")
                    .join(" ")} : ${tiempo.segundos
                    .toString()
                    .padStart(2, "0")
                    .split("")
                    .join(" ")}`}
            </h1>
            <section className="flex gap-4">
                <button
                    onClick={() => setActivo(true)}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-200"
                >
                    Play
                </button>
                <button
                    onClick={() => setActivo(false)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-200"
                >
                    Pause
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-200">
                    Skip
                </button>
            </section>

            <h1>{"Pomodoros: " + tiempo.count}</h1>
        </div>
    );
};
