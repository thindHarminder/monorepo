import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono<{
  Bindings: Bindings;
}>();

// app.use(
//   "*",
//   cors({
//     allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     origin: ["https://webflow-com.webflow.io", "https://weblow.com"],
//   })
// );

app.get("/", (c) => {
  return c.redirect(c.env.WEBFLOW_DOMAIN);
});

app.get("/api/hello", async (c) => {
  return c.json({
    message: "Hello World",
  });
});

export default app;
