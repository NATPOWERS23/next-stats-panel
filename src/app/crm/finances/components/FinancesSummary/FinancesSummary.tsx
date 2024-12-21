import InfoBox from "@/components/InfoBox/InfoBox";

export const FinancesSummary = () => (
  <div style={{
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem"
  }}>
    <InfoBox title="Income" numbers={100000} description="" />
    <InfoBox title="Outcome" numbers={1000} description="" />
  </div >
);