/* eslint-disable no-unused-vars */
const Discord = require('discord.js');

module.exports = {
	name: 'kick',
	description: 'kick members off the guild.',
	execute(message, args) {
        const kickingUser = message.mentions.users.first();
        if(kickingUser){
            const member = message.guild.member();
            if(member){
              member  
                .kick()
                .then(() => {
                    message.reply(`kicked ${kickingUser}`)
                })
                .catch(err => {
                    message.reply('unable to kick the member');
                    console.error(err);
                });
        }
	}else{
        message.reply('you didnt mention a user to kick')
    }
}};