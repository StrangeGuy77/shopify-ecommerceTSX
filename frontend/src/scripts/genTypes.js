const {generateFromFile} = require("react-to-typescript-definitions");
const path = require("path");
const fs = require("fs");

const generateTypes = () => {
	const regex = /^.*\.(ts|tsx|jsx|js)$/;
	const ComponentsFolders = fs.readdirSync("./src/components");
	let SecFolders = [];
	for (const iterator of ComponentsFolders) {
		if (iterator.match(regex)) {
			TSXFiles.push(iterator);
		} else {
			SecFolders.forEach(file => {
				if (file.match(regex)) {
					SecFolders = fs.readdirSync(`./src/components/${file}`);
					generateFromFile("reacttypes.d.ts", typeDir, {});
				}
			});
		}
	}
};

generateTypes();
