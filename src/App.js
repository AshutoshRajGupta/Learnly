import "./App.css";
import { NavRoutes } from "./routes/NavRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App bg-neutral-50 m-auto max-w-screen-2xl">
      <NavRoutes />
      <ToastContainer
        position="top-right"
        autoClose="1000"
        style={{ top: "4.5em", right: "0em" }}
      />
    </div>
  );
}

export default App;
