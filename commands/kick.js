/* eslint-disable no-unused-vars */
const Discord = require('discord.js');

module.exports = {
	name: 'kick',
	description: 'kick members off the guild.',
	execute(message, args) {
        
        const mentionedUser = message.mentions.users.first() || message.guild.members.get(args[0]);

        if(!message.member.hasPermission('KICK_MEMBERS', 'ADMINISTRATOR'))
            return message.channel.send(`you dont have permissions to kick ${mentionedUser}`)

        if(!mentionedUser.kickable)
            return message.reply('cant kick that user')

        let reason = args.slice(1).join('');

        async{
            await mentionedUser.kick(reason)
        message.reply(`${mentionedUser.user.tag} has been kicked by ${message.author}`)
        };
	},
};