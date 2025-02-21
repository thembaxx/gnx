import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { auth } from "@/lib/auth";
import { extractInitials } from "@/lib/utils";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";

interface ProfileProps {
  user: typeof auth.$Infer.Session.user;
  onClick: () => void;
}

function Profile({ user, onClick }: ProfileProps) {
  return (
    <div className="w-full">
      <div className="flex gap-3 grow">
        <Avatar>
          <AvatarImage src={user.image ?? "/images/profile.jpg"} />
          <AvatarFallback>{extractInitials(user.name)}</AvatarFallback>
        </Avatar>
        <div className="text-sm">
          <p className="font-medium truncate">{user.name}</p>
          <p className="text-secondary-foreground/70 text-[0.8rem] truncate">
            {user.email}
          </p>
          <Button
            className="font-medium text-[0.8rem] px-0 text-destructive"
            size="sm"
            variant="link"
            onClick={async () => {
              await authClient.signOut();
              onClick();
            }}
          >
            <span>Sign out</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
