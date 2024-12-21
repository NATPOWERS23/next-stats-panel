import Card from "@/components/Card/Card";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

export const SpendsProgressCard = () => (
  <Card
    title="Spends History"
    body={<ProgressBar />}
  />
);