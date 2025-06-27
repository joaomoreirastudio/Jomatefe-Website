const fs = require("fs");
const path = require("path");

const imagesPath = path.join(__dirname, "../Images/");
const apiPath = path.join(__dirname, "../../api");

const folders = fs
    .readdirSync(imagesPath)
    .filter((folder) => folder !== "images.cjs");

folders.forEach((folder) => {
    const folderPath = path.join(imagesPath, folder);
    const files = fs.readdirSync(folderPath);

    const jsonData = files.map((file) => {
        return {
            id: files.indexOf(file) + 1,
            imageName: file,
            imagePath:
                "./" +
                path
                    .normalize(
                        path.relative(imagesPath, path.join(folderPath, file))
                    )
                    .replace(/\\/g, "/"),
        };
    });

    const jsonFile = path.join(apiPath, `${folder}.json`);
    fs.writeFileSync(jsonFile, JSON.stringify(jsonData, null, 2));
});

module.exports = {};
