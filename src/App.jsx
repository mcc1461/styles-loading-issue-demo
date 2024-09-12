import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-900">
      <header className="mb-8 text-center">
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "20px",
            fontSize: "20px",
          }}
        >
          Test Button
        </button>

        <h1 className="mb-4 text-5xl font-bold text-blue-500 custom-class">
          MusCo Full-Stack MERN Developer
        </h1>
        <p className="mb-4 text-lg text-gray-400">
          Fixing "This Page Failed to Load a Stylesheet" Error
        </p>
      </header>

      {/* Button Section */}
      <div className="flex items-center justify-center gap-12 mb-8 text-xl">
        <button
          type="button"
          className="px-8 py-4 font-bold text-white transition-all duration-200 bg-blue-700 rounded-full hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={() => navigate("/error")}
        >
          Simulate Error
        </button>
        <button
          type="button"
          className="px-8 py-4 font-bold text-gray-900 transition-all duration-200 bg-gray-200 rounded-full hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100"
          onClick={() => navigate("/fixed")}
        >
          View Fixed Version
        </button>
      </div>
    </div>
  );
}

export default App;
