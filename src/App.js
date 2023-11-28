import logo from "./logo.svg";
import Header from "./components/layout/Header";
import "./App.css";
import PageTwo from "./components/layout/PageTwo";
import PageThree from "./components/layout/PageThree";
import PageFour from "./components/layout/PageFour";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <PageTwo></PageTwo>
      <PageThree></PageThree>
      <PageFour></PageFour>
      <Footer></Footer>
    </div>
  );
}

export default App;
