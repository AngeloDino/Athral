import { useEffect, useState } from "react";
import { Cog, Pause, Play } from "lucide-react";

export const Timer = () => {
    const OPCIONES_BREAK = [5, 10, 15, 20];

    // Estado para manejar el tipo de temporizador, los segundos, minutos y si está activo
    // true si es timer, false si es break
    const [tipo, setTipo] = useState(true);
    const [count, setCount] = useState(0);
    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(1);
    const [activo, setActivo] = useState(false);

    // Función para iniciar el temporizador
    useEffect(() => {
        if (!activo) return;

        const timer = setInterval(() => {
            if (segundos === 0) {
                if (minutos === 0) {
                    if (tipo) {
                        startBreak();
                        setTipo(false);
                        setCount(count + 1);
                    } else {
                        setMinutos(1);
                        setTipo(true);
                        setActivo(false);
                    }
                    clearInterval(timer);
                    return;
                }
                setMinutos(minutos - 1);
                setSegundos(1);
            } else {
                setSegundos(segundos - 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    });

    const startBreak = () => {
        setActivo(false);
        const breakTime = OPCIONES_BREAK[0];
        setMinutos(breakTime);
        setSegundos(0);
    };

    let finalminutos = minutos < 10 ? `0${minutos}` : minutos;
    let finalsegundos = segundos < 10 ? `0${segundos}` : segundos;

    return (
        <div className="flex flex-col items-center justify-center box-border p-6 bg-gray-800 rounded-xl shadow-2xl w-80 mx-auto">
            <h1 className="text-2xl font-bold text-white mb-4">
                {tipo ? "Timer" : "Break"}
            </h1>
            <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg text-center">
                {finalminutos} : {finalsegundos}
            </h1>
            <section className="flex gap-4 ">
                <button
                    onClick={() => setActivo(true)}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-200"
                >
                    <Play className="inline-block" />
                </button>
                <button
                    onClick={() => setActivo(false)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-200"
                >
                    <Pause className="inline-block" />
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-200">
                    <Cog className="inline-block" />
                </button>
            </section>

            <h1 className="mt-6 font-bold">Pomodor Count: {count}</h1>
        </div>
    );
};
