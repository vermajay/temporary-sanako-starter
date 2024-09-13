import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/common/Navbar";
import Error from "./pages/Error";

function App() {

  return (
    <div className = "w-screen min-h-screen flex flex-col">
      <Navbar/>
        <div className="mt-[70px]">
          <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route path='*' element={<Error/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;