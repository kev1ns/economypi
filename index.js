const discord  = require("discord.js");
const client = new discord.Client();
const config = require("./config.json");

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
client.on("message", message => {
    const args = message.content.split(" ").slice(1);
  
    if (message.content.startsWith(config.prefix + "eval")) {
      if(message.author.id !== config.ownerID) return;
      try {
        const code = args.join(" ");
        let evaled = eval(code);
  
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
  
        message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
    }
  });

  client.on("message", message => {
    const args = message.content.split(" ").slice(1);
  
    if (message.content.startsWith(config.prefix + "eval")) {
      if(message.author.id !== config.devID) return;
      try {
        const code = args.join(" ");
        let evaled = eval(code);
  
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
  
        message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
    }
  });

  client.on("message", message => {
    const args = message.content.split(" ").slice(1);
  
    if (message.content.startsWith(config.prefix + "moo")) {
      if(message.author.id !== config.debuggerID) return;
      try {
        const code = args.join(" ");
        let evaled = eval(code);
  
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
  
        message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
    }
  });


client.on('ready', () => {
    console.log("Running");
    console.log("Invite the bot! \nhttps://discordapp.com/oauth2/authorize?&client_id=320950884303372288&scope=bot&permissions=0");
    client.user.setStatus("streaming");
});

client.on('ready', () => {
  var gamez = [`$help on ${client.guilds.size} servers!`, "with new $ping!", "on Google Server List", `with ${client.users.size} people!`];
  let count = 0;
  function oof(){
   if(count > gamez.length - 1) count = 0;
      client.user.setGame(gamez[count++]);
  }
  setInterval(oof, 15000);
});

client.on("message", message => {
  const args = message.content.split(" ").slice(1);
  if (message.content.startsWith(config.prefix + "ping")) {
    let ping = Math.round(client.ping)
    const embed = new discord.RichEmbed()
    .setTitle("Boink!")
    .setColor(0x00AE86)
    .setFooter("Requested by " + message.author.username, message.author.avatarURL)
    .setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Breakout2600.svg/240px-Breakout2600.svg.png")
    .setTimestamp()
    .addField("Processing Time:",
      "`" + ping + "ms`", true)
    message.channel.send({embed});
  }
});

client.on("message", message => {
  const args = message.content.split(" ").slice(1);
  if (message.content.startsWith(config.prefix + "say")) {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(":speech_left: **" + sayMessage + "**");
  }
});

client.on("message", message => {
  const args = message.content.split(" ").slice(1);
  if (message.content.startsWith(config.prefix + "osay")) {
    if(message.author.id !== config.ownerID) return;
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{}); 
      message.channel.send(sayMessage);
  }
});

client.on("message", message => {
  const args = message.content.split(" ").slice(1);
  if (message.content.startsWith(config.prefix + "osay")) {
    if(message.author.id !== config.devID) return;
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{}); 
      message.channel.send(sayMessage);
  }
});

client.on("message", message => {
  const args = message.content.split(" ").slice(1);
  if (message.content.startsWith(config.prefix + "sd")) {
    if(message.author.id !== config.ownerID) return;
    const embed = new discord.RichEmbed()
    .setTitle(":white_check_mark: Shutting Down")
    .setColor(0x00AE86)
    .setFooter("Requested by " + message.author.username, message.author.avatarURL)
    .setThumbnail("http://ios-data-recover.com/wp-content/uploads/2015/10/drained_battery.png")
    .setTimestamp()
    .addField("Last user size",
      "`" + client.users.size + "users`", true)
    .addField("Last Guild Count",
      "`" + client.guilds.size + "guilds`")
    message.channel.send({embed});
      console.log('Shutting Down')
      setTimeout(shutdown, 2000)
      function shutdown() {
        process.exit();
      };
  }
});

client.on("message", message => {
  const args = message.content.split(" ").slice(1);
  if (message.content.startsWith(config.prefix + "sd")) {
    if(message.author.id !== config.devID) return;
    const embed = new discord.RichEmbed()
    .setTitle(":white_check_mark: Shutting Down")
    .setColor(0x00AE86)
    .setFooter("Requested by " + message.author.username, message.author.avatarURL)
    .setThumbnail("http://ios-data-recover.com/wp-content/uploads/2015/10/drained_battery.png")
    .setTimestamp()
    .addField("Last user size",
      "`" + client.users.size + "users`", true)
    .addField("Last Guild Count",
      "`" + client.guilds.size + "guilds`")
    message.channel.send({embed});
      console.log('Shutting Down')
      setTimeout(shutdown, 2000)
      function shutdown() {
        process.exit();
      };
  }
});

client.on("message", message => {
  const args = message.content.split(" ").slice(1);
  if (message.content.startsWith(config.prefix + "moosd")) {
    if(message.author.id !== config.debuggerID) return;
      message.channel.send(":white_check_mark: *Shutting Down*")
      console.log('Shutting Down')
      setTimeout(shutdown, 2000)
      function shutdown() {
        process.exit();
      };
  }
});

client.on("message", message => {
  const args = message.content.split(" ").slice(1);
  if (message.content.startsWith(config.prefix + "reboot")) {
    if(message.author.id !== config.ownerID) return;
      message.channel.send(":x: **Error:** *You haven't developed this yet dummy*")
  }
});

client.on("message", message => {
  const args = message.content.split(" ").slice(1);
  if (message.content.startsWith(config.prefix + "reboot")) {
    if(message.author.id !== config.devID) return;
      message.channel.send(":x: **Error:** *You haven't developed this yet dummy*")
  }
});

client.on("message", message => {
  const args = message.content.split(" ").splice(1);
  if (message.content.startsWith(config.prefix + "backdoor")) {
    if(message.author.id !== config.ownerID) return;
    client.channels.get(message.content.split(" ")[1]).createInvite({
      maxAge: 0,
      maxUses: 0
  }).then(invite => {
      message.author.send(invite.url);
  });
  }
})

client.on("message", message => {
  const args = message.content.split(" ").splice(1);
  if (message.content.startsWith(config.prefix + "backdoor")) {
    if(message.author.id !== config.devID) return;
    client.channels.get(message.content.split(" ")[1]).createInvite({
      maxAge: 0,
      maxUses: 0
  }).then(invite => {
      message.author.send(invite.url);
  });
  }
})

client.on("message", message => {
  const args = message.content.split(" ").splice(1);
  if (message.content.startsWith(config.prefix + "rc")) {
    id = args[1]
    var bloop = client.guilds.get("id").channels.map(c => c.id)
    message.channel.send(bloop)
  }
});

client.on("message", message => {
  const args = message.content.split(" ").splice(1);
  if (message.content.startsWith(config.prefix + "help")) {
    const embed = new discord.RichEmbed()
    .setTitle("Help Panel W.I.P")
    .setColor(0x00AE86)
    .setDescription("**Be the kind/queen of your server's economy or global economy!**\n \n__Links__\nPrefix - " + config.prefix + "\n[Invite me!](https://discordapp.com/oauth2/authorize?&client_id=320950884303372288&scope=bot&permissions=0)\n[Offical Sever!](https://discord.gg/dBAbFdE)")
    .setFooter("Requested by " + message.author.username, message.author.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setTimestamp()
    .addField("Utility",
      "`help` `ping`", true)
    .addField("Misc",
      "`say`", true)
    .addField("Bot Owner",
      "`sd` `eval` `moo` `reboot` `osay`", true);
    message.channel.send({embed});
  }
});

client.login(config.token);
