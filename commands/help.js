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
			.setAuthor('tout v2')
			.setFooter('by aeprl#0031', 'https://cdn.discordapp.com/avatars/162945458581274624/1e9bbdef8ac0a6794c469c1763e7fa8a.png?size=1024')
			.setThumbnail('https://cdn.discordapp.com/attachments/472189537162887180/737423176560279643/toutcircle2.png');

		message.author.send(toutHelp);
	},

};