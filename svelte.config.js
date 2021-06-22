import preprocess from "svelte-preprocess";
import path from "path";
import adapter from "@sveltejs/adapter-static";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    floc: true,
    vite: {
      resolve: {
        alias: {
          $stores: path.resolve("src/stores"),
        },
      },
    },
    adapter: adapter({
      // default options are shown
      pages: "build",
      assets: "build",
      fallback: null,
    }),
  },

  preprocess: [preprocess({
    "postcss": true
  })]
};

export default config;
