import CreateNoteButton from "@/components/create-note-button";
import NoteCard from "@/components/note-card";
import PageWrapper from "@/components/page-wrapper";
import { getNotebooksById } from "@/server/notebook";
import React from "react";

type Params = Promise<{
  notebookId: string;
}>;

const NotebookPage = async ({ params }: { params: Params }) => {
  const { notebookId } = await params;
  const { notebook } = await getNotebooksById(notebookId);

  return (
    <div>
      <PageWrapper
        breadcrumbs={[
          {
            label: "Dashboard",
            href: "/dashboard",
          },
          {
            label: notebook?.name ?? "Notebook",
            href: `/dashboard/notebook/${notebook?.id}`,
          },
        ]}
      >
        <h1 className="mb-3 ml-1">{notebook?.name}</h1>
        <CreateNoteButton notebookId={notebookId} />
        <div className="grid grid-col-1 md:grid-cols-3 gap-4 mt-3">
          {notebook?.notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </PageWrapper>
    </div>
  );
};

export default NotebookPage;
