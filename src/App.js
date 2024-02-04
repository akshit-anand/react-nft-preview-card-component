import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const cardData = {
    title: "Equilibrium #3429",
    desc: "Our Equilibrium collection promotes balance and calm.",
    price: "0.041 ETH",
    time: "3 days left",
    creator: "Jules Wyvern",
  };
  return (
    <div className="App">
      <Card cardData={cardData} />
      <div className="attribution">Coded by Akshit Anand.</div>
    </div>
  );
}

export default App;
