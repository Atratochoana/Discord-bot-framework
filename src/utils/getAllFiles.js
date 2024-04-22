const fs = require('fs')
const path = require('path')

module.exports = (directory, foldersOnly = false) => {
    let fileNames = [];

    const files = fs.readdirSync(directory, {withFileTypes:true}); // no clue what it does

    for (const file of files){ // Checks if folder or file then pushes to fileNames list
        const filePath = path.join(directory, file.name);

        if (foldersOnly){
            if (file.isDirectory()){
                fileNames.push(filePath);
            }
        } else {
            if (file.isFile()){
                fileNames.push(filePath);
            }
        }
    }

    return fileNames;
}