"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { Button } from "./ui/button";
import z from "zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createNote } from "@/server/notes";

const formSchema = z.object({
  title: z.string().min(2).max(50),
});
const CreateNoteButton = ({ notebookId }: { notebookId: string }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const { register, handleSubmit } = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      const response = await createNote({ ...values, content: {}, notebookId });
      if (response.success) {
        toast.success(response.message);
        router.refresh();
        setOpen(false);
      } else {
        toast.error(response.message);
      }
    } catch {
      toast.error("Failed to create note");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer  hover:bg-primary/80">
          Create Note
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Note</DialogTitle>
          <DialogDescription>
            Create a new note in this notebook.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            {...register("title", {
              required: true,
            })}
            id="title"
            type="text"
            placeholder="Meeting notes, Ideas, Todo ..."
            disabled={loading}
          />
          <Button
            className="cursor-pointer w-full"
            type="submit"
            disabled={loading}
          >
            Create Note
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoteButton;
