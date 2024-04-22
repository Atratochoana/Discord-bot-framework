require('dotenv').config();
const { WebhookClient, Webhook } = require("discord.js");

//db stuff needs adding

module.exports = (interaction) => {

    const webhook = new WebhookClient({ url: process.env.LOG_WEBHOOK });

    let interactionName = "Null"
    if (interaction.type === 2) interactionName = interaction.commandName;
    if (interaction.type === 3) interactionName = interaction.customId;

    webhook.send({
        content: `[<@${interaction.user.id}> | ${interaction.user.id}] used the interaction: ${interactionName} ||in the channel [${interaction.channel} | ${interaction.channelId}] in the guild [${interaction.guild} | ${interaction.guildId}] created at {<t:${interaction.createdTimestamp}:R>}||`
    })
}
    
