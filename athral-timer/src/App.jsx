import Navbar from './components/Navbar';
import { Timer } from './components/Timer';

function App() {
  return (
    <>
      <Navbar />
      <main className="p-4 background-p min-h-screen text-white">
        <Timer />
      </main>
    </>
  );
}

export default App
