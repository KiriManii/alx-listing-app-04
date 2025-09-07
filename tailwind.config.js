// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // The 'content' section tells Tailwind where your files are that use Tailwind classes.
  // Tailwind will scan these files to figure out which CSS to generate.
  content: [
    // This looks for any .js, .ts, .jsx, or .tsx files inside your 'pages' folder.
    "./pages/**/*.{js,ts,jsx,tsx}",
    // This looks for any .js, .ts, .jsx, or .tsx files inside your 'components' folder.
    "./components/**/*.{js,ts,jsx,tsx}",
    // IMPORTANT: This line is crucial for Next.js, even if you are using the Pages Router.
    // It ensures Tailwind scans all relevant parts of your project.
    "./app/**/*.{js,ts,jsx,tsx}",
    // Any other files you might add later that use Tailwind CSS classes.
  ],
  theme: {
    // This is where you can customize Tailwind's default design system,
    // like adding your own colors, fonts, spacing, etc.
    extend: {},
  },
  plugins: [],
};
