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
			.setColor('86b8ff')
			.setTitle('bot commands')
			.addFields(
				{ name : 'botinfo', value : 'shows the version and amount of commands on the bot' },
				{ name : 'serverinfo', value : `shows valuable information about the server the user's in`},
				{ name : `servericon`, value : `directly shows the icon of a server the user's in`},
				{ name : 'avatar', value : 'shows the avatar of the person mentioned/message sender' },
				{ name : 'purge', value : 'deletes multiple messages from 2-100 messages'}
			)
			.setAuthor('tout v3')
			.setFooter('by aeprl#0031')
			.setThumbnail('https://cdn.discordapp.com/attachments/472189537162887180/833409783813374002/toutcircle.png');

		message.author.send(toutHelp);
	},

};