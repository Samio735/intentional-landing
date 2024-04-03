import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("660cade3e490b591a6cb"); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";
export const databases = new Databases(client);
