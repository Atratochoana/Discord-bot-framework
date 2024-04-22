const path = require("path")
const getAllFiles = require("./getAllFiles")

module.exports = () => {
    buttonCategories = getAllFiles(path.join(__dirname, '..','buttons'),true)
    let buttonObjs = []

    for (buttonCategory in buttonCategories) {
        const buttonParents = getAllFiles(buttonCategories[buttonCategory],true);

        for (buttonParent in buttonParents) {
            const buttons = getAllFiles(buttonParents[buttonParent]);
            
            for (button in buttons) {
                buttonObjs.push(buttons[button])
            }
        }
    }

    return buttonObjs
}