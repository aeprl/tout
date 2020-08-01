/* eslint-disable no-unused-vars */
const Discord = require('discord.js');


module.exports = {
	name: 'avatar',
	description: 'get your own or the mentioned persons avatar.',
	execute(message, args) {

		message.client.user.avatarURL({ format: 'png', dynamic: true, size: 1024 });

		const avatarEmbed = new Discord.MessageEmbed();
		if(!message.mentions.users.first()) {
			avatarEmbed.setThumbnail(message.author.displayAvatarURL());
			avatarEmbed.setColor('acc6eb');
			avatarEmbed.setFooter('by aeprl#0031', 'https://cdn.discordapp.com/avatars/162945458581274624/854975aa1a09abcc8e1354b3252f6457.png?size=256');
			return message.channel.send(avatarEmbed);
		}
		else{
			const mentionedUser = message.mentions.users.first();
			avatarEmbed.setThumbnail(mentionedUser.displayAvatarURL());
			avatarEmbed.setColor('acc6eb');
			avatarEmbed.setFooter('by aeprl#0031', 'https://cdn.discordapp.com/avatars/162945458581274624/854975aa1a09abcc8e1354b3252f6457.png?size=256');
			return message.channel.send(avatarEmbed);
		}
	},
};