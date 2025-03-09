import "./App.css";
import "./Header/Header.css";
import Header from "./Header/Header.jsx";
import Introduction from "./Introduction/Introduction.jsx";
import Divider from "./Divider/Divider.jsx";
import OurWork from "./OurWork/OurWork.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Divider />
      <OurWork />
      <Footer />
    </div>
  );
}

export default App;
