import Link from "next/link";

interface Props {
  onClick?: () => void;
}

const MicrosoftAdminIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#fafafa"}
    fill={"none"}
    {...props}
  >
    <path
      d="M12 2V22M20.5 12H3.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M21 11.1833V8.28029C21 6.64029 21 5.82028 20.5959 5.28529C20.1918 4.75029 19.2781 4.49056 17.4507 3.9711C16.2022 3.6162 15.1016 3.18863 14.2223 2.79829C13.0234 2.2661 12.424 2 12 2C11.576 2 10.9766 2.2661 9.77771 2.79829C8.89838 3.18863 7.79783 3.61619 6.54932 3.9711C4.72192 4.49056 3.80822 4.75029 3.40411 5.28529C3 5.82028 3 6.64029 3 8.28029V11.1833C3 16.8085 8.06277 20.1835 10.594 21.5194C11.2011 21.8398 11.5046 22 12 22C12.4954 22 12.7989 21.8398 13.406 21.5194C15.9372 20.1835 21 16.8085 21 11.1833Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

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
