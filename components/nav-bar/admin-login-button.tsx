import { MicrosoftAdminIcon } from "@/lib/icons";
import Link from "next/link";

interface Props {
  onClick?: () => void;
}

function AdminLoginButton({ onClick }: Props) {
  return (
    <Link
      className="px-2 pr-3 h-8 border border-primary text-foreground rounded-lg shadow/60 flex items-center gap-2 text-sm font-medium"
      href="/admin/login"
      onClick={onClick}
    >
      <MicrosoftAdminIcon className="h-4 w-4 text-icon shrink-0" />
      <span>Admin login</span>
    </Link>
  );
}

export default AdminLoginButton;
