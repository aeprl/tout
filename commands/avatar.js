/* eslint-disable no-unused-vars */
const Discord = require('discord.js');


module.exports = {
	name: 'avatar',
	description: 'get your own or the mentioned persons avatar.',
	execute(message, args, client) {

		message.client.user.avatarURL({ format: 'png', dynamic: true, size: 1024 });

		const avatarEmbed = new Discord.MessageEmbed();
		if(!message.mentions.users.first()) {
			avatarEmbed.setThumbnail(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }));
			avatarEmbed.setColor('acc6eb');
			return message.channel.send(avatarEmbed);
		}
		else{
			const mentionedUser = message.mentions.users.first();
			avatarEmbed.setThumbnail(mentionedUser.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }));
			avatarEmbed.setColor('acc6eb');
			return message.channel.send(avatarEmbed);
		}
	},
};