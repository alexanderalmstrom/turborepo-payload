import sharedConfig from "@repo/config/tailwind";
import { withTV } from "tailwind-variants/transformer";

/** @type {import('tailwindcss').Config} */
export default withTV({
  ...sharedConfig,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
});
