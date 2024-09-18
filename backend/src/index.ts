import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono<{
  Bindings: Bindings;
}>();

app.use(
  "*",
  cors({
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    origin: ["https://fifty-410.webflow.io", "https://fifty410.com"],
  })
);

app.get("/", (c) => {
  return c.redirect(c.env.WEBFLOW_DOMAIN);
});

app.get("/api/healthie/providers", async (c) => {
  return c.json({
    providers: [
      {
        id: c.env.STAGING_PROVIDER_ID,
        name: "Staging",
      },
      {
        id: c.env.PRODUCTION_PROVIDER_ID,
        name: "Production",
      },
    ],
  });
});

export default app;
