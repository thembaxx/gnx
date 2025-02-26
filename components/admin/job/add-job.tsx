"use client";

import { Button } from "@/components/ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import AddJobForm from "./add-job-form";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
// import { JobProps } from "@/types";

interface AddJobProps {
  children: React.ReactNode;
}

function AddJob({ children }: AddJobProps) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  // async function onSubmitHandler(data: JobProps) {
  //   console.log(data);
  // }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-md max-h-[90svh] px-0 h-full overflow-hidden">
          <DialogHeader>
            <DialogTitle>Add Job</DialogTitle>
            <DialogDescription>Add a new job to your CV</DialogDescription>
          </DialogHeader>
          <div className="grow py-4 pl-0 pr-4 overflow-y-auto scrollbar-thin scrollbar-thumb-background/40">
            <AddJobForm />
          </div>
          <DialogFooter>
            <Button type="submit">Add Job</Button>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="max-h-[90svh] h-full overflow-hidden">
        <DrawerHeader>
          <DrawerTitle>Add Job</DrawerTitle>
          <DrawerDescription>Add a new job to your CV</DrawerDescription>
        </DrawerHeader>
        <div className="grow p-4 pb-32 overflow-y-auto">
          <AddJobForm />
        </div>
        <DrawerFooter className="shrink-0 fixed bottom-0 left-0 w-full bg-background/80 backdrop-blur-sm">
          <Button type="submit">Add Job</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default AddJob;
