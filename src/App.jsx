
import {Card} from "./components/Card/Card";
import "./styles/global.css"

function App() {
  return (
    <section className="header">
      <Card
      title = "Entradas"
      icon = "/img/verde.svg"
      value = "R$ 17.400,00" />

      <Card 
      title = "Saídas"
      icon = "/img/vermelho.svg"
      value = "R$ 1.259,00" />
      
      <Card 
      title = "Total"
      icon = "/img/sifrao.svg"
      value = "R$ 16.141,00" />

    </section>
    
  );
}

export default App;
