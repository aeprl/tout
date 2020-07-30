const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'shows commands',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {

		message.reply('sending you help 🚨')
			.then(msg => {
				msg.delete({ timeout: 5000 });
			}).catch(console.error);

		const toutHelp = new Discord.MessageEmbed()
			.setColor('acc6eb')
			.setTitle('bot commands')
			.addFields(
				{ name : 'botinfo', value : 'shows the version and amount of commands on the bot' },
				{ name : 'ping', value : 'some command idk' },
			)
			.setAuthor('tout v2')
			.setFooter('by aeprl#0031', 'https://cdn.discordapp.com/attachments/472189537162887180/737423238375800837/pfp3.png')
			.setThumbnail('https://cdn.discordapp.com/attachments/737441496911052830/737469036685819974/toutloop.gif');

		message.author.send(toutHelp);
	},

};