// postcss.config.js
module.exports = {
  plugins: {
    // This line tells PostCSS to use the Tailwind CSS plugin.
    // It's like telling a machine which specific tool to use for a job.
    tailwindcss: {},
    // This line tells PostCSS to use Autoprefixer.
    // Autoprefixer helps add special prefixes to CSS so your website looks
    // good on older browsers too.
    autoprefixer: {},
  },
};
