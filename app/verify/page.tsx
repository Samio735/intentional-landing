"use client";

import { Account, Client } from "appwrite";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const urlParams = new URLSearchParams(useSearchParams());

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
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

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
