import { Card } from "./components/Card/Card";
import "./styles/global.css";

function App() {
  return (
    <main>
      <section className="header">logo Button</section>
      <section className="dashboard">
        <Card type="income" value={17400} />

        <Card type="outcome" value={1259} />

        <Card type="total" value={16141} />
      </section>
    </main>
  );
}

export default App;
