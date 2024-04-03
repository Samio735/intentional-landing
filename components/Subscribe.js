"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "./ui/checkbox";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { databases } from "@/app/appwrite";
import { ID, Query } from "appwrite";

export const waitingS_DATABASE_ID = "intentional-db"; // Replace with your database ID
export const waitingS_COLLECTION_ID = "waiting-list"; // Replace with your collection ID

async function addWaiting(waiting) {
  const response = await databases.createDocument(
    waitingS_DATABASE_ID,
    waitingS_COLLECTION_ID,
    ID.unique(),
    waiting
  );
  console.log(response);
}

export function Subscribe() {
  const [completed, setCompleted] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <div className="my-10 flex flex-col gap-4 items-center">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Subscribe to the waiting list </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogDescription>
              <div className="flex w-ful mb-2  max-w-sm items-center space-x-2">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex col-span-9  my-4 gap-2 ">
                <Checkbox
                  checked={completed}
                  onCheckedChange={() => {
                    setCompleted(!completed);
                  }}
                  id="beta"
                />
                <label
                  htmlFor="beta"
                  className={`  text-sm break-words font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 `}
                >
                  I want to be a beta-tester
                </label>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                addWaiting({ email, "applied-for-beta": completed });
              }}
            >
              Subscribe
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
