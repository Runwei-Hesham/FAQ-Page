import Navbar from "./components/NavBar";
import Faq from "./components/Faq";
import Pages from "./components/pages";
import Boxes from "./components/boxes";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar/> 
      <Pages/>
      <Boxes/>
    <Faq/>
    </div>
  );
}

export default App;
