module.exports = {
    name:'ping',
    description:'Pong!',
    devOnly: false,
    //testOnly: Boolean,
    //options: Object[],
    deleted: false,
    userPermissions: true,
    permissionLevel: 0,

    callback: async (client,interaction) => {
        await interaction.deferReply();

        const reply = await interaction.fetchReply();

        const ping = reply.createdTimestamp - interaction.createdTimestamp;

        interaction.editReply(
            `Pong! Client ${ping}ms | Websocket: ${client.ws.ping}ms`
        )

    },
};