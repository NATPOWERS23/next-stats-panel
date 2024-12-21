import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import LinkButton from "@/components/LinkButton/LinkButton";
import PageTitle from "@/components/PageTitle/PageTitle";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

export default function Tasks() {
  const pageContent = (
    <>
      <PageTitle title="Team tasks" />
      <div className="grid-wrapper">
        <Button content="+ New Task" onClick={undefined} />

        <Button content="Find task" onClick={undefined} />

        <Button content="Assigned tasks" onClick={undefined} />

        <Button content="Export tasks in CSV" onClick={undefined} />

        <Card
          body={<LinkButton content="Workflow statistic" href="./team" />}
        />
      </div>

      <Card title="Task list" />
    </>
  );

  return <PageWrapper content={pageContent} />;
}
