import { Button } from "@/components/ui/button";
import AddJob from "./add-job";

async function AddJobButton() {
  return (
    <div className="w-full flex justify-center">
      <AddJob>
        <Button className="w-full max-w-sm">Add a job</Button>
      </AddJob>
    </div>
  );
}

export default AddJobButton;
