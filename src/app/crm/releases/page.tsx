import PageTitle from "@/components/PageTitle/PageTitle";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";

export default function Releases() {
  const contentItems = [
    { title: "Show 1", body: "Show 1 body", id: 1 },
    { title: "Show 2", body: "Show 2 body", id: 2 },
    { title: "Show 3", body: "Show 3 body", id: 3 },
    { title: "Show 4", body: "Show 4 body", id: 4 },
    { title: "Show 5", body: "Show 5 body", id: 5 },
    { title: "Show 6", body: "Show 6 body", id: 6 },
  ];

  const pageContent = (
    <>
      <PageTitle title="Show Realizes" />
      <div className="grid-wrapper">
        {contentItems.map((item) => (
          <Card
            body={<>{item.body}</>}
            title={item.title}
            key={`release_card_${item.id}`}
          />
        ))}
      </div>

      <Button content="+ Propose new content" onClick={undefined} />
    </>
  );

  return <PageWrapper content={pageContent} />;
}
