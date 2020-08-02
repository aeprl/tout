/* eslint-disable no-unused-vars */
const Discord = require('discord.js');


module.exports = {
	name: 'avatar',
	description: 'get your own or the mentioned persons avatar.',
	execute(message, args, client) {

		message.client.user.avatarURL({ format: 'png', dynamic: true, size: 1024 });

		const avatarEmbed = new Discord.ImageEmbed();
		if(!message.mentions.users.first()) {
			avatarEmbed.setFooter(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }));
			avatarEmbed.setColor('acc6eb');
			return message.channel.send(avatarEmbed);
		}
		else{
			const mentionedUser = message.mentions.users.first();
			avatarEmbed.setFooter(mentionedUser.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }));
			avatarEmbed.setColor('acc6eb');
			return message.channel.send(avatarEmbed);
		}
	},
};