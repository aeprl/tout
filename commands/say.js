/* eslint-disable no-unused-vars */
const Discord = require('discord.js')

module.exports = {
	name: 'say',
	description: 'says smn idk.',
	execute(message, args) {
        const messageSay = args.join(" ");
        try {
            await message.channel.send(messageSay)
        } catch (err) {
            message.channel.send('too fucking bad')
        }
	},
};