const Discord = require('discord.js');
const fs = require('fs');

/* eslint-disable no-unused-vars */
module.exports = {
	name: 'prefix',
	description: 'sets the prefix for tout.',
	execute(message, args) {
		if(!message.member.hasPermission('MANAGE_GUILD')) return message.reply('no permission to change the prefix');
		if(!args[0] || args[0 == 'help']) return message.reply(`you should do ${prefix}prefix (desired prefix)`);

		const prefixes = JSON.parse(fs.readFileSync('../prefixes.json', 'utf-8'));

		prefixes[message.guild.id] = {
			prefixes: args[0],
		};

		fs.writeFile('../prefixes.json', JSON.stringify(prefixes), (err) => {
			if(err) console.log(err);
		});


		const prefixSet = new Discord.MessageEmbed()
			.setColor('acc6eb')
			.setTitle('prefix set.')
			.setDescription(`set to ${args[0]}`);

		message.channel.send(prefixSet);

	},
};