const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';

// requires

const fs = require('fs');
// const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("Get out of my Swamp!!! Bot is online!");
    // memberCounter(client);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'command') {
        client.commands.get('command').execute(message, args, Discord);
    
    } else if (command == 'clear') {
        client.commands.get('clear').execute(message,args);
    
    } else if (command == 'mcserver') {
        client.commands.get('mcserver').execute(client, message, args, Discord);
    }
});

// keep at bottom of file
client.login('ODM3NDg0ODYxMjEyMTk2OTA5.YItOjg.HZLc1WJixj1MN-aAPUPQ_gW9aUM');

