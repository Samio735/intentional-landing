import { Suspense } from "react";
import Verify from "../../components/Verify";

export default function page() {
  return (
    <Suspense>
      <Verify />
    </Suspense>
  );
}
