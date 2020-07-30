const Discord = require('discord.js');
const fs = require('fs');

/* eslint-disable no-unused-vars */
module.exports = {
	name: 'prefix',
	description: 'sets the prefix for tout.',
	execute(message, args) {
		message.channel.send('pong');
	},
};