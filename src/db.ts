import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient | undefined = undefined;
declare global {
  // eslint-disable-next-line no-var
  var __db: PrismaClient | undefined;
}
try {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
    prisma.$connect();
  } else {
    if (!global.__db) {
      global.__db = new PrismaClient();
      global.__db.$connect();
    }
    prisma = global.__db;
  }
} catch (e) {
  console.error();
}

export default prisma;
