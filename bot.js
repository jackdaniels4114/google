const Discord = require('discord.js') // discord.js modülü tanımlıyoruz.
const client = new Discord.Client() // client tanımalamsı
const { readdirSync } = require('fs'); // tanımlamalar
const { join } = require('path'); // tanımlamalar

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'anavatan') {
      msg.reply('https://tenor.com/view/israel-hebrew-jewish-israeli-israeli-flag-gif-16718328');
    }
  });
  
  client.on('message', msg => {
    if (msg.content.toLowerCase() === prefix + 'sa') {
      msg.reply('as :kaaba::pray::prayer_beads::star_and_crescent::mosque::woman_wearing_turban::woman_with_headscarf::man_wearing_turban:');
    }
  
  });


  client.on('message', msg => {
    if (msg.content.toLowerCase() === prefix + 'merhaba') {
      msg.reply('merhaba');
    }
  
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sa') {
      msg.reply('as :pray::prayer_beads::star_and_crescent::mosque::woman_wearing_turban::woman_with_headscarf::man_wearing_turban::kaaba:');
    }
  
  });

client.commands= new Discord.Collection(); // komutları alıyoruz

const prefix = "/"

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); // Komutları Ayarlıyoruz.
}

client.on("error", console.error);

client.on('ready', () => {
  
    client.user.setActivity('Visual Studio Code')

    console.log('Bot Aktif')
});

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();



        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.login('ODcyMTY0OTkwMzY1MzQ3ODkw.YQl48Q.LOZgJFMoy5hG4Kx-XyU_3ibgzdk')


    client.on('message', async message => {
      if (message.content.startsWith('.play')) {
        const args = message.content.split(' ').slice(1)
        const motmesajı = args.join(" ")
        if (!botmesajı) return message.reply('URL koymadın')
        if (message.member.voice.channel) {
          const connection = await message.member.voice.channel.join();
          const ytdl = require('ytdl-core');
          connection.play(ytdl(`${botmesajı}`, { filter: 'audioonly' }))
        } else {
          message.reply('Bir Sesli Kanala Girin.');
        }
      }
    })


/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
 client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('x!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login('ODcyMTY0OTkwMzY1MzQ3ODkw.YQl48Q.LOZgJFMoy5hG4Kx-XyU_3ibgzdk');

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('x!ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Başarıyla Banlandı! ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('Başka Bir Yetkiliyi Banlayamazsın!');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("Böyle Biri Yok!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("Banlanacak Kişiyi Yazmadın!");
    }
  }
});