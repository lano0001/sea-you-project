import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Whoisseayou from "./components/Whoisseayou";
import Whyyoushouldcare from "./components/Whyyoushouldcare";
import TakeAction from "./components/TakeAction";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Whoisseayou />
      <Whyyoushouldcare />
      <TakeAction />
      <Footer />
    </div>
  );
}

export default App;
