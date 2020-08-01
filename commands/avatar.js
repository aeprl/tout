/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
new Discord.client = require('discord.js');


module.exports = {
	name: 'avatar',
	description: 'get your own or the mentioned persons avatar.',
	execute(message, args) {

		client.user.avatarURL({ format: 'png', dynamic: true, size: 1024 });

		const avatarEmbed = new Discord.MessageEmbed;
		if(!message.mentions.users.first()) {
			avatarEmbed.setTitle('your avatar');
			avatarEmbed.setThumbnail(message.author.displayAvatarURL());
			avatarEmbed.setColor('acc6eb');
			avatarEmbed.setFooter('by aeprl#0031', 'https://cdn.discordapp.com/attachments/472189537162887180/737423238375800837/pfp3.png');
			return message.reply(avatarEmbed);
		}
		else{
			const mentionedUser = message.mentions.users.first();
			avatarEmbed.setTitle(`${mentionedUser.tag}'s profile picture`);
			avatarEmbed.setThumbnail(mentionedUser.displayAvatarURL());
			avatarEmbed.setColor('acc6eb');
			avatarEmbed.setFooter('by aeprl#0031', 'https://cdn.discordapp.com/attachments/472189537162887180/737423238375800837/pfp3.png');
			return message.reply(avatarEmbed);
		}
	},
};