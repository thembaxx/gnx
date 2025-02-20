import LoginForm from "@/components/admin/login/login-form";

function AdminLoginPage() {
  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-sm space-y-16">
        <h1 className="text-xl font-semibold">Admin login</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default AdminLoginPage;
