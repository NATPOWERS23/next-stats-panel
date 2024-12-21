import PageWrapper from "@/components/PageWrapper/PageWrapper";
import PageTitle from "@/components/PageTitle/PageTitle";
import Card from "@/components/Card/Card";

export default function Team() {
  const cardBody = <></>;

  const pageContent = (
    <>
      <PageTitle title="Team" />
      <Card body={<>Members Line ...</>} />

      <div className="my-4">
        <h3 className="text-lg">Dashboard</h3>
        <div className="flex gap-5">
          <Card title="Team chat" body={cardBody} />
        </div>
      </div>
    </>
  );

  return <PageWrapper content={pageContent} />;
}
