/* eslint-disable no-unused-vars */
const Discord = require('discord.js');


module.exports = {
	name: 'servericon',
	description: `server's icon`,
    execute(message, args) {

        const {guild} = message
        const {name} = guild
        const icon = guild.iconURL()
        
        const toutSiCon = new Discord.MessageEmbed()
            .setColor('acc6eb')
            .setAuthor(`${name} icon`)
            .setURL('https://www.youtube.com/watch?v=VD6__C2Ht6M')
            .setImage(icon);
    
        message.channel.send(toutSiCon);
    },
};

