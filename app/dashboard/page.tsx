import CreateNotebookButton from "@/components/create-notebook-button";
import NotebookCard from "@/components/notebook-card";
import PageWrapper from "@/components/page-wrapper";
import { getNotebooks } from "@/server/notebook";
import React from "react";

const Page = async () => {
  const notebooks = await getNotebooks();
  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboarod" }]}>
      <CreateNotebookButton />

      <h1 className="mt-3 ml-1"> Notebooks </h1>

      <div className="grid grid-col-1 md:grid grid-cols-3 gap-4  mt-3">
        {notebooks.success &&
          notebooks.notebooks?.map((notebook) => (
            <NotebookCard key={notebook.id} notebook={notebook} />
          ))}
      </div>

      {notebooks.success && notebooks.notebooks?.length === 0 && (
        <div>No Notebooks found</div>
      )}
    </PageWrapper>
  );
};

export default Page;
