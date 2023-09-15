import "./App.css";
import { PlansList } from "./components/Plans/PlansList";
import { usePlans } from "./hooks/usePlans";

function App() {
  const { plans, loading } = usePlans();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PlansList plans={plans} />
    </>
  );
}

export default App;
