const Discord = require('discord.js');
const fs = require('fs');
const commandNumber = fs.readdirSync('./commands').length;

module.exports = {
	name: 'botinfo',
	description: 'shows the info about the bot',
	alias: 'bi',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		const toutEmbed = new Discord.MessageEmbed()
			.setColor('86b8ff')
			.setTitle('bot info')
			.setURL('https://www.youtube.com/watch?v=VD6__C2Ht6M')
			.setFooter('by aeprl#0031')
			.setThumbnail('https://cdn.discordapp.com/attachments/472189537162887180/833409783813374002/toutcircle.png')
			.addFields(
				{ name : 'tout version', value : '2.0.1' },
				{ name : 'no. of commands', value : `${commandNumber}`, inline: true },
				{ name : 'prefix', value : 'a', inline: true },
			)
			.setTimestamp();

		message.channel.send(toutEmbed);
	},

};