import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SocialAuthForm = () => {
  return <div className="mt-10 flex flex-wrap gap-2.5">
    <Button className="background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5">
        <Image src="/images/google.svg" width={20} height={20} alt="google" />
        <span>Login with Google</span>
    </Button>
    <Button className="background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5">
        <Image src="/images/facebook.png" width={20} height={20} alt="google" />
        <span>Login with Facebook</span>
    </Button>
  </div>;
};

export default SocialAuthForm;
