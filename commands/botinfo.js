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
			.setColor('acc6eb')
			.setTitle('bot info')
			.setURL('https://www.youtube.com/watch?v=VD6__C2Ht6M')
			.setFooter('by aeprl#0031', 'https://cdn.discordapp.com/attachments/472189537162887180/737423238375800837/pfp3.png')
			.setThumbnail('https://cdn.discordapp.com/attachments/472189537162887180/737423176560279643/toutcircle2.png')
			.addFields(
				{ name : 'tout version', value : '2.0.1' },
				{ name : 'no. of commands', value : `${commandNumber}`, inline: true },
				{ name : 'prefix', value : 'a', inline: true },
			);

		message.channel.send(toutEmbed);
	},

};