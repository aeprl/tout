const Discord = require('discord.js');
const fs = require('fs');
const commandNumber = fs.readdirSync('./commands').length;

module.exports = {
	name: 'say',
	description: 'says',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
        const sayM = args.join(" ");
        message.delete().catch(err => console.log(err));

            message.channel.send(sayM);
        

	},

};