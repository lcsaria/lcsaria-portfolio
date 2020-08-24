const tailwindcss = require('tailwindcss');
module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
      },
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
};