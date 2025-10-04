import PageWrapper from "@/components/page-wrapper";
import RichTextEditor from "@/components/rich-text-editor";
import { getNoteById } from "@/server/notes";
import React from "react";

type Params = Promise<{
  noteId: string;
}>;

const NotePage = async ({ params }: { params: Params }) => {
  const { noteId } = await params;
  const { note } = await getNoteById(noteId);

  return (
    <div>
      <PageWrapper
        breadcrumbs={[
          {
            label: "Dashbaord",
            href: "/dasboard",
          },
          {
            label: note?.notebook.name ?? "Noetbook",
            href: `/dashboard/notebook/${note?.notebookId}`,
          },
          {
            label: note?.title ?? "Note",
            href: `/dashboard/notebook/${note?.notebookId}/note/${noteId}`,
          },
        ]}
      >
        <h1 className="mb-3"> {note?.title} </h1>
        <RichTextEditor content={note?.content as JSON[]} noteId={noteId} />
      </PageWrapper>
    </div>
  );
};

export default NotePage;
