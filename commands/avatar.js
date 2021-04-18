/* eslint-disable no-unused-vars */
const Discord = require('discord.js');


module.exports = {
	name: 'avatar',
	description: 'shows the avatar of the person mentioned/message sender',
	execute(message, args, client) {

		const avatarEmbed = new Discord.MessageEmbed();
		if(!message.mentions.users.first()) {
			avatarEmbed.setAuthor(message.author.username, message.author.displayAvatarURL({ format: 'png', dynamic: true}));
			avatarEmbed.setImage(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }));
			avatarEmbed.setColor('86b8ff');
			return message.channel.send(avatarEmbed);
		}
		else{
			const mentionedUser = message.mentions.users.first();
			avatarEmbed.setAuthor(message.author.username, message.author.displayAvatarURL({ format: 'png', dynamic: true}));
			avatarEmbed.setImage(mentionedUser.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }));
			avatarEmbed.setColor('86b8ff');
			return message.channel.send(avatarEmbed);
		}
	},
};