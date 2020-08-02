/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const prefix = require('../config.json')

module.exports = {
	name: 'say',
	description: 'say things as the bot.',
	execute(message) {
        
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`you can't use that without permissions`)
        const sayMessage = args.join('');
        message.delete().catch();
        message.channel.send(sayMessage);
       
	},
};