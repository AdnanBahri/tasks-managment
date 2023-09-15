"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { Instagram } from "lucide-react";

const GoogleSignInButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  return (
    <Button
      className="w-full text-red-500"
      variant="secondary"
      onClick={() => signIn("google", { callbackUrl })}
    >
      <Instagram className="mr-2 h-4 w-4" />
      Continue with Google
    </Button>
  );
};

export default GoogleSignInButton;
