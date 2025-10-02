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
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { createNotebook } from "@/server/notebook";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2).max(50),
});
const CreateNotebookButton = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const { register, handleSubmit } = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const { data } = await authClient.getSession();
      const userId = data?.user.id;

      if (!userId) {
        toast.error("You are not authorized to create a notebook");
        return;
      }

      const response = await createNotebook({ ...values, userId, notes: [] });
      if (response.success) {
        toast.success(response.message);
        router.refresh();
        setOpen(false);
      } else {
        toast.error(response.message);
      }
    } catch {
      toast.error("Failed to create notebook");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer  hover:bg-primary/80">
          Create Notebook
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Notebook</DialogTitle>
          <DialogDescription>
            Create a new notebook to store you notes.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            {...register("name", {
              required: true,
            })}
            id="name"
            type="text"
            placeholder="Test, Work ..."
            disabled={loading}
          />
          <Button
            className="cursor-pointer w-full"
            type="submit"
            disabled={loading}
          >
            Create Notebook
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNotebookButton;
