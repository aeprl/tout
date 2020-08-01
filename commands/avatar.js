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
		}
		else{
			const mentionedUser = message.mentions.users.first();
			avatarEmbed.setThumbnail(mentionedUser.displayAvatarURL());
			avatarEmbed.setColor('acc6eb');
			return message.channel.send(avatarEmbed);
		}
	},
};