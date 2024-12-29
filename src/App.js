import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Whoisseayou from "./components/Whoisseayou";
import Whyyoushouldcare from "./components/Whyyoushouldcare";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Whoisseayou />
      <Whyyoushouldcare />
      <Footer />
    </div>
  );
}

export default App;
