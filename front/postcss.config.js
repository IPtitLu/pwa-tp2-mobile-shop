const tailwindcss = require("tailwindcss");

module.exports = {
    Plugin: [tailwindcss("./tailwind.config.js", require("autoprefixer"))],
};
