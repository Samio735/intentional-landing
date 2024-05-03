// export const dynamic = "force-dynamic"; // defaults to auto
// import { PostHog } from "posthog-node";

// export async function POST(request: Request) {
//   const client = new PostHog(
//     "phc_Ko8W2P6uuf72QGoZzAtNzdD3d8GNeUSLBxMQ3YqLLUA",
//     {
//       host: "https://eu.i.posthog.com",
//     }
//   );
//   client.capture({
//     event: request.body.event,
//     distinctId: request.body.distinctId,
//   });
//   await client.shutdown();
//   return new Response(request.body);
// }
