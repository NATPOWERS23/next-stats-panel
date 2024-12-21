import Card from "@/components/Card/Card";
import CustomList from "@/components/CustomList/CustomList";

const mockData = [{ name: 1000 }, { name: 500 }, { name: 2000 }];

export const IntegrationCard = () => (
  <Card
    title="Income from Integrations"
    body={<CustomList items={mockData} />}
  />
);