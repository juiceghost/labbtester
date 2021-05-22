// https://www.freecodecamp.org/news/how-to-style-your-react-apps-with-less-code-using-tailwind-css-and-styled-components/


module.exports = {
    plugins: [
        require("tailwindcss")("./src/tailwind.config.js"),
        require("autoprefixer"),
    ],
}
