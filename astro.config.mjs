import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://bejewelled-gingersnap-d2a57e.netlify.app/",
  integrations: [preact()]
});