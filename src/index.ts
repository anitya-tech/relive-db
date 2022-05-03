import { Provider, resolveProvider } from "@gtr/utils";
import { Connection } from "mongoose";

export const initDB = async (connection: Provider<Connection>) => {
  const conn = await resolveProvider(connection);

  return {
    ReliveUser: (await import("./models/ReliveUser.js")).create(conn),
    StoragePolicy: (await import("./models/StoragePolicy.js")).create(conn),
    StorageFile: (await import("./models/StorageFile.js")).create(conn),
  };
};
