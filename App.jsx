import PlanejamentoPendencias from "./components/PlanejamentoPendencias";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4">Painel de Pendências</h1>
      <PlanejamentoPendencias />
    </div>
  );
}

export default App;
