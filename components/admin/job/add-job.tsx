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
import AddJobForm from "./add-job-form";
// import { JobProps } from "@/types";

interface AddJobProps {
  children: React.ReactNode;
}

function AddJob({ children }: AddJobProps) {
  // async function onSubmitHandler(data: JobProps) {
  //   console.log(data);
  // }

  return (
    <Drawer defaultOpen>
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
