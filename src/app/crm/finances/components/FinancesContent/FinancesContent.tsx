import PageTitle from "@/components/PageTitle/PageTitle";
import { SpendsProgressCard } from "../SpendsProgressCard/SpendsProgressCard";
import { PlatformCard } from "../PlatformCard/PlatformCard";
import { SpendsCard } from "../SpendsCard/SpendsCard";
import { FinancesSummary } from "../FinancesSummary/FinancesSummary";
import { IntegrationCard } from "../IntegrationCard/IntegrationCard";

export const FinancesContent = () => (
  <>
    <PageTitle title="Finances" />
    <FinancesSummary />
    <div style={{
      display: "grid",
      gap: "1rem",
      marginBottom: "1rem"
    }}>
      <IntegrationCard />
      <PlatformCard />
      <SpendsCard />
    </div>
    <div style={{
      marginBottom: "1rem"
    }}>
      <SpendsProgressCard />
    </div>
  </>
);