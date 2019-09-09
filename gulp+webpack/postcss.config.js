const path = require('path');
module.exports = {
    syntax: "postcss-scss",
    plugins: [
			// require("postcss-easy-import")({
			// 	extensions: ".scss"
			// }),
			require("postcss-nested"),
			require("postcss-simple-vars")({
				silent: true
			}),
			require("postcss-sassy-mixins")({
			//mixinsDir: path.join(__dirname, './src/assets/styles/assets/'),
				silent: true
			}),
			// 	// require("precss")({
			// 		// 		variables: require("./src/assets/styles/assets/vars.js")
			// 		// }),
			// 		require("precss"),
			// 		require("autoprefixer")({
      //       browsers: ["last 2 versions"],
      //       cascade: true
			// 		}),
			// 		//require("cssnano"),
				]
			};