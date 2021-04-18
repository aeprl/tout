/* eslint-disable no-unused-vars */
const Discord = require('discord.js');


module.exports = {
	name: 'servericon',
	description: `server's icon`,
    execute(message, args) {

        const {guild} = message
        const {name} = guild
        
        const toutSiCon = new Discord.MessageEmbed()
            .setColor('86b8ff')
            .setAuthor(`${name} icon`)
            .setURL('https://www.youtube.com/watch?v=VD6__C2Ht6M')
            .setImage(guild.iconURL({ format : `png`, dynamic: true, size: 1024 }));
    
        message.channel.send(toutSiCon);
    },
};

