import { varchar, pgTable } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelpers";

export const UserTable = pgTable("users", {
  id: id,
  name: varchar().notNull(),
  imageURL: varchar().notNull(),
  email: varchar().notNull().unique(),
  createdAt,
  updatedAt,
});
