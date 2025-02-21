"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import AddJob from "./add-job";

function AddJobButton() {
  return (
    <div className="w-full">
      <AddJob>
        <Button className="w-full">Add a job</Button>
      </AddJob>
    </div>
  );
}

export default AddJobButton;
