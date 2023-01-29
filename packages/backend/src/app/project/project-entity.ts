import { EntitySchema } from "typeorm";
import { AppConnection, Collection, Project, User } from "@activepieces/shared";
import { ApIdSchema, BaseColumnSchemaPart } from "../helper/base-entity";

interface ProjectSchema extends Project {
  owner: User;
  collections: Collection[];
  appConnections: AppConnection[];
}

export const ProjectEntity = new EntitySchema<ProjectSchema>({
  name: "project",
  columns: {
    ...BaseColumnSchemaPart,
    ownerId: ApIdSchema,
    displayName: {
      type: String,
    },
  },
  indices: [
    {
      name: "idx_project_owner_id",
      columns: ["ownerId"],
      unique: false,
    },
  ],
  relations: {
    appConnections: {
      type: "one-to-many",
      target: "app_connection",
      inverseSide: "project",
    },
    owner: {
      type: "many-to-one",
      target: "user",
      joinColumn: {
        name: "ownerId",
        foreignKeyConstraintName: "fk_project_owner_id",
      },
    },
    collections: {
      type: "one-to-many",
      target: "collection",
      inverseSide: "project",
    },
  },
});