const path = require('path');

module.exports = {
  plugins: [
    // 1. postcss-import: Handles @import statements, resolving paths
    require('postcss-import')({
      path: [
        './css', // Path to your CSS partials directory
        // Add any other directories where your imported CSS files reside
      ],
      skipDuplicates: true, // Prevents importing the same file multiple times
    }),

    // 2. @fullhuman/postcss-purgecss: Removes unused CSS
    //    We'll use a named import/require pattern to avoid the .default issue.
    //    Sometimes, `require` returns an object with `default` and other named exports.
    //    Other times, `require` returns the function directly. This handles both.
    //    The original error indicates that `require('@fullhuman/postcss-purgecss')`
    //    itself was not a function, meaning it returns an object that *contains* the function.
    //    So, we definitely need to access a property, likely `default`.
    //    Let's be explicit and try `default` first based on your error history.
    require('@fullhuman/postcss-purgecss').default({ // <--- **Crucial line for PurgeCSS**
      // `content` tells PurgeCSS where to look for used class names.
      // Adjust these paths to where your HTML, JS, or template files are located.
      content: [
        './**/*.html',      // Look in all HTML files in subdirectories
        './**/*.php',      // Look in all HTML files in subdirectories
        './**/*.js',        // Look in all JavaScript files
        './**/*.jsx',       // If you're using React
        './**/*.vue',       // If you're using Vue
        './**/*.svelte',    // If you're using Svelte
        // Add other file types as needed (e.g., .ts, .tsx, .php, .twig, etc.)
      ],
      // `defaultExtractor` is a regex to extract class names from your content.
      // This one is common and robust.
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],

      // `safelist` is for classes you want to keep even if PurgeCSS doesn't find them
      // (e.g., classes added dynamically by JavaScript, animation classes, specific library classes).
      safelist: [
      ],
    }),

    // 3. cssnano: Minifies the CSS
    require('cssnano')({
      preset: 'default', // Uses the default minification preset
    }),
  ],
};
