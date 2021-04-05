const Discord = require('discord.js');

module.exports = {
	name: 'purge',
	description: 'delete multiple messages',
	// eslint-disable-next-line no-unused-vars
	async execute(message, args) {

        if(!message.member.hasPermission("MANAGE_MESSAGES")){
            return message.channel.send(`you lack permissions to use this command.`);
        }
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")){
            return message.channel.send(`i don't have permissions to purge.`);
        }
        if(!args[0]){
            return message.channel.send(`state number of messages to delete.`);
        }

    const deleteNum = Number(args[0], 10);

        if(isNaN(deleteNum)) return message.channel.send(`use a valid number.`);
        if(!Number.isInteger(deleteNum)) return message.channel.send(`use a whole number, not an integer.`);
        if(!deleteNum || deleteNum < 2 || deleteNum > 100) return message.channel.send(`invalid number (number must be between 2-100)`);

    const fetched = await message.channel.messages.fetch({
        limit: deleteNum
    });

    try{
        await message.channel.bulkDelete(fetched)
        .then(messages => message.channel.send(`deleted ${messages.size} messages.`))
    } catch (err){
        console.log(err);
        message.channel.send(`unable to delete messages.`)
    }

	},

};