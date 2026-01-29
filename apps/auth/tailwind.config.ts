import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "../../libs/core-ui/src/**/*.{ts,tsx,js,jsx}", // 👈 important
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;