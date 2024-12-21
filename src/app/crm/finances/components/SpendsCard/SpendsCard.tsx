import Card from "@/components/Card/Card";
import CustomList from "@/components/CustomList/CustomList";

const mockSpendsData = [{ name: 1000 }, { name: 500 }, { name: 2000 }];

export const SpendsCard = () => (
  <Card
    title="Spends History"
    body={<CustomList items={mockSpendsData} />}
  />
);