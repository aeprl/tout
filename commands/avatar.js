/* eslint-disable no-unused-vars */
const Discord = require('discord.js');


module.exports = {
	name: 'avatar',
	description: 'get your own or the mentioned persons avatar.',
	execute(message, args, client) {

		const avatarEmbed = new Discord.MessageEmbed();
		if(!message.mentions.users.first()) {
			avatarEmbed.setAuthor(message.author.username, message.author.displayAvatarURL({ format: 'png', dynamic: true}));
			avatarEmbed.setImage(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }));
			avatarEmbed.setColor('acc6eb');
			return message.channel.send(avatarEmbed);
		}
		else{
			const mentionedUser = message.mentions.users.first();
			avatarEmbed.setAuthor(message.author.username, message.author.displayAvatarURL({ format: 'png', dynamic: true}));
			avatarEmbed.setImage(mentionedUser.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }));
			avatarEmbed.setColor('acc6eb');
			return message.channel.send(avatarEmbed);
		}
	},
};