/* eslint-disable no-unused-vars */
const Discord = require('discord.js');

module.exports = {
	name: 'avatar',
	description: 'get your own or the mentioned persons avatar.',
	execute(message, args) {
		const avatarEmbed = new Discord.MessageEmbed;
		if(!message.mentions.users.first()) {
			avatarEmbed.setTitle('your avatar');
			avatarEmbed.setThumbnail(message.author.displayAvatarURL());
			avatarEmbed.setColor('acc6eb');
			avatarEmbed.setFooter('by aeprl#0031', 'https://cdn.discordapp.com/attachments/472189537162887180/737423238375800837/pfp3.png');
			return message.reply(require('util').inspect(avatarEmbed));
		}
		else{
			const mentionedUser = message.mentions.users.first();
			avatarEmbed.setTitle(`${mentionedUser.tag}'s profile picture`);
			avatarEmbed.setThumbnail(mentionedUser.displayAvatarURL());
			avatarEmbed.setColor('acc6eb');
			avatarEmbed.setFooter('by aeprl#0031', 'https://cdn.discordapp.com/attachments/472189537162887180/737423238375800837/pfp3.png');
			return message.reply(require('util').inspect(avatarEmbed));
		}
	},
};