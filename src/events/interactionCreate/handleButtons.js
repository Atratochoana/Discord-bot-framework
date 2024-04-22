const getAllFiles = require("../../utils/getAllFiles")
const path = require("path")
const getLocalButtons = require("../../utils/getLocalButtons")
const logInteraction = require('../../utils/logInteraction')

module.exports = (client,interaction) => {
    if (!interaction.isButton()) return

    localButtons = getLocalButtons()
    logInteraction(interaction)

    for (button in localButtons) {

        buttonName = localButtons[button].slice((localButtons[button].length - interaction.customId.length - 3),localButtons[button].length - 3)

        if (interaction.customId === buttonName){
            const buttonFunction = require(localButtons[button])
            logInteraction(interaction)
            buttonFunction(client,interaction)
        }
    }

}