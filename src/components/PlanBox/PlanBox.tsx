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

export const PlanBox = ({
  id,
  totalDistance,
  numberOfTracks,
  headings,
  swathWidth,
  grower,
  farm,
  operation,
  image,
}: PlanProps) => {
  return (
    <div>
      <h4>{farm}</h4>
      <img src={image} alt="farm" />
    </div>
  );
};
