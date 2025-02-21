import AddJobButton from "@/components/admin/job/add-job-button";

function AdminPage() {
  return (
    <div className="p-6">
      <div className="space-y-12">
        <h1>Admin Page</h1>
        <div className="flex bg-background/80 backdrop-blur-2xl fixed bottom-0 left-0 p-4 items-center justify-center w-full">
          <AddJobButton />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
