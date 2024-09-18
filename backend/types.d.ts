type Context = import("hono").Context;
type Bindings = {
  WEBFLOW_DOMAIN: string;
  HEALTHIE_API_KEY: string;
  STAGING_PROVIDER_ID: string;
  PRODUCTION_PROVIDER_ID: string;
  OPENLOOP_STAGING_FORM_ID: string;
  OPENLOOP_PRODUCTION_FORM_ID: string;
};
