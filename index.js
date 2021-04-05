const Discord = require('discord.js');
const chalk = require('chalk');
const client = new Discord.Client();
const { prefix, botInfo } = require('./config.json');
const fs = require('fs');
client.commands = new Discord.Collection();

/* ty william for the help ♥️ */

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.once('ready', () => {
	console.log(chalk.dim(`prefix is ${prefix}`));
	client.user.setPresence({ activity: { name: 'prefix = a' }, status: 'idle' });
	console.log(chalk.italic(botInfo.name));
	console.log(chalk.italic(botInfo.version));
	console.log(chalk.bold(`${ client.user.username }'s up`));
});

client.on('message', message => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);

	try {
		command.execute(message, args);
	}
	catch(error) {
		console.error(error);
		message.reply('there was an error trying to execute the command');
	}
});

client.login(process.env.token);

