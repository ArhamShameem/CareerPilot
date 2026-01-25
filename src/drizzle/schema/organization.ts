import { varchar, pgTable } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelpers";

export const OrganizationTable = pgTable("organizations", {
  id: id,
  name: varchar().notNull(),
  imageURL: varchar(),
  createdAt,
  updatedAt,
});
