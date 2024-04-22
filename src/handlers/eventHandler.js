const path = require('path');
const getAllFiles = require("../utils/getAllFiles.js");
const logInteraction = require("../utils/logInteraction.js")

module.exports = (client) => {
    const eventFolders = getAllFiles(path.join(__dirname, '..','events'), true) // gets all folders in events folder

    for (const eventFolder of eventFolders){
        const eventFiles = getAllFiles(eventFolder);
        eventFiles.sort((a,b) => a > b)
        
        const eventName = eventFolder.replace(/\\/g,'/').split('/').pop();
        
        client.on(eventName, async(arg) =>{
            for (const eventFile of eventFiles){
                const eventFunction = require(eventFile);
                await eventFunction(client,arg);
            }
        })
    }
};