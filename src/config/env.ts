const zennv=require("zennv");
const { z }=require("zod");

export const env = zennv({
  dotenv: true,
  schema: z.object({
    PORT: z.number().default(3000),
    HOST: z.string().default("0.0.0.0"),
    DATABASE_CONNECTION: z.string(),
  }),
});
