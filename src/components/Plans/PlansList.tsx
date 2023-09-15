import { PlanBox } from "../PlanBox";

interface PlanProps {
  id: number;
  totalDistance: number;
  numberOfTracks: number;
  headings: number;
  swathWidth: number;
  grower: string;
  farm: string;
  operation: string;
  image: string;
}

interface PlansProps  {
  plans: Array<PlanProps>
}

export const PlansList = ({plans}: PlansProps) => {
  return (
    <div>
      {plans.map((plan) => (
        <PlanBox {...plan} />
      ))}
    </div>
  );
};
