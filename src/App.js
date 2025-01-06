import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Whoisseayou from "./components/Whoisseayou";
import Whyyoushouldcare from "./components/Whyyoushouldcare";
import TakeAction from "./components/TakeAction";
import Whatyoucando from "./components/Whatyoucando";
import Events from "./components/Events";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Whoisseayou />
      <Whatyoucando />
      <Whyyoushouldcare />
      <TakeAction />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
