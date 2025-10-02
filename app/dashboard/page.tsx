import CreateNotebookButton from "@/components/create-notebook-button";
import PageWrapper from "@/components/page-wrapper";
import { getNotebooks } from "@/server/notebook";
import React from "react";

const Page = async () => {
  const notebooks = await getNotebooks();
  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboarod" }]}>
      <CreateNotebookButton />
      <div className="flex flex-col space-y-2">
        {notebooks.notebooks?.map((notebook) => (
          <span>{notebook.name}</span>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Page;
