"use client";

import { Account, Client } from "appwrite";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Verify() {
  const searchParams = useSearchParams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const urlParams = new URLSearchParams(searchParams);
  const [verified, setVerified] = useState(false);
  useEffect(() => {
    const secret = urlParams.get("secret");
    const userId = urlParams.get("userId");

    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
      .setProject("660cade3e490b591a6cb"); // Your project ID

    const account = new Account(client);
    account.updateVerification(userId, secret).then(
      function (response) {
        console.log(response);
        setVerified(true);
      },
      function (error) {
        console.log(error);
      }
    );
  }, [urlParams]);

  if (!verified) {
    return (
      <div className=" flex flex-col items-center">
        <h2 className="text-xl  my-6 font-bold">intentional</h2>

        <div className="h-16"></div>
        <h1 className="text-6xl max-w-xl my-14 font-bold text-center">
          Verifying Email
        </h1>
        <p className="text-center max-w-2xl">
          Please wait while we verify your email
        </p>
        {/* <Subscribe /> */}
      </div>
    );
  }
  return (
    <div className=" flex flex-col items-center">
      <h2 className="text-xl  my-6 font-bold">intentional</h2>

      <div className="h-16"></div>
      <h1 className="text-6xl max-w-xl my-14 font-bold text-center">
        Email Verified
      </h1>
      <p className="text-center max-w-2xl">
        You can go back to using the extension
      </p>
      {/* <Subscribe /> */}
    </div>
  );
}
