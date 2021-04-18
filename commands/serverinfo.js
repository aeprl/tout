const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

module.exports = {
	name: 'serverinfo',
	description: `shows valuable information about the server the user's in`,
	alias: 'bi',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {

        if (message.channel.type == "dm"){
            message.channel.send(`you cant use this command in direct messages`)
        } else

        const {guild} = message
        const { name, memberCount, owner } = guild
        const icon = guild.iconURL()
        

		const toutInfo = new Discord.MessageEmbed()
			.setColor('86b8ff')
			.setTitle(`${name} info`)
			.setURL('https://www.youtube.com/watch?v=VD6__C2Ht6M')
			.setFooter('by aeprl#0031')
			.setThumbnail(icon)
			.addFields(
				{ name : `member count`, value : `${memberCount} members`, inline: true },
				{ name : 'owner tag', value : `${owner.user.tag}`, inline: true },
			)
			.setTimestamp();


                
		message.channel.send(toutInfo);
        return;
	},

};