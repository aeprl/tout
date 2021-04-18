const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const {guild} = message
const { name, memberCount, owner } = guild
const icon = guild.iconURL()

module.exports = {
	name: 'serverinfo',
	description: 'server info',
	alias: 'bi',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		const toutInfo = new Discord.MessageEmbed()
			.setColor('acc6eb')
			.setTitle(`${name} info`)
			.setURL('https://www.youtube.com/watch?v=VD6__C2Ht6M')
			.setFooter('by aeprl#0031')
			.setThumbnail(icon)
			.addFields(
				{ name : `${guild.name}` },
				{ name : 'member count', value : `${memberCount}`, inline: true },
				{ name : 'owner tag', value : `${owner.user.tag}`, inline: true },
			)
			.setTimestamp();

		message.channel.send(toutInfo);
	},

};