const { generate } = require("react-dts-generator");
const fs = require("fs-extra");
const path = require("path");

/**
 * @readonly this function doesnt return the expectetd output as it just seems to write a file with a base class but not with any interface
 */

export const result = fs.readdirSync(path.join(__dirname, "../components")).splice(1);
console.log(result);
for (const i in result) {
  generate({
    input: path.join(__dirname, `../components/${result[i]}/${result[i]}.tsx`),
    isBaseClass: true
  });
}
