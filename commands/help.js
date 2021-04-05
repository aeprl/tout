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
				{ name : 'avatar', value : 'shows the avatar of the person mentioned/message sender' },
				{ name : 'purge', value : 'deletes multiple messages from 2-100 messages'}
			)
			.setAuthor('tout v3')
			.setFooter('by aeprl#0031', 'https://cdn.discordapp.com/avatars/162945458581274624/0629a19a1b50445913671d29c65f314a.png?size=1024')
			.setThumbnail('https://cdn.discordapp.com/attachments/737441496911052830/828764665890734120/toutcircle.png');

		message.author.send(toutHelp);
	},

};