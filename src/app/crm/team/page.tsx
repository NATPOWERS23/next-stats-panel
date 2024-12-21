import PageWrapper from "@/components/PageWrapper/PageWrapper";
import PageTitle from "@/components/PageTitle/PageTitle";
import Card from "@/components/Card/Card";

export default function Team() {
  const cardBody = <></>;

  const pageContent = (
    <>
      <PageTitle title="Team" />
      <Card body={<>Members Line ...</>} />

      <h3>Dashboard</h3>
      <div style={{
        display: "flex",
        gap: "10px",
        height: "300px"
      }}>
        <Card title="Team chat" body={cardBody} />
      </div>
    </>
  );

  return <PageWrapper content={pageContent} />;
}
