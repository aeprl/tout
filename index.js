const Discord = require('discord.js');
const chalk = require('chalk');
const client = new Discord.Client();
const { botInfo, toutconfig } = require('./config.json');
const fs = require('fs');
client.commands = new Discord.Collection();

/* command handler */

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.once('ready', () => {
	client.user.setActivity('a', { type: 'LISTENING' });
	console.log(chalk.italic(botInfo.name));
	console.log(chalk.italic(botInfo.version));
	console.log(chalk.bold(`${ client.user.username } is ready`));
});

client.on('message', message => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const prefixes = JSON.parse(fs.readFileSync('./prefixes.json', 'utf-8'));

	if(!prefixes[message.guild.id]) {
		prefixes[message.guild.id] = {
			prefixes: toutconfig.prefix,
		};
	}

	const prefix = prefixes[message.guild.id].prefixes;
	console.log(prefix);

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

