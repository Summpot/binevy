import { defineConfig } from "kysely-ctl";
import { dialect } from "./kysely/db";

export default defineConfig({
  // replace me with a real dialect instance OR a dialect name + `dialectConfig` prop.
  dialect: dialect,
  migrations: {
    migrationFolder: "kysely/migrations",
  },
  //   plugins: [],
  //   seeds: {
  //     seedFolder: "seeds",
  //   }
});
