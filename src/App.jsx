import Graph from "./components/graph/Graph";
import GraphFooter from "./components/graph/GraphFooter";
import Header from "./components/header/Header";
import Information from "./components/information/Information";
import Main from "./components/main/Main";
import Features from "./components/features/Features";
import Info from "./components/features/Info";
import Customers from "./components/customers/Customers";
import Download from "./components/downloadAppSection/Download";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Graph />
      {/* Переделать компонент Graph */}
      <GraphFooter />
      <Information />
      <Features />
      <Info />
      <Customers />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
