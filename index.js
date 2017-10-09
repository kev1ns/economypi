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
    //client.user.setGame("on Google Server List!");
    client.user.setStatus("streaming");
});

client.on('ready', () => {
    setInterval(changingGame1, 60000);
    function changingGame1() {
      client.user.setGame("$help | Developed by !  DeorcYT  !")
    }  
    /*
    setTimeout(changingGame, 60000);
    function changingGame() {
    */
      setInterval(changingGame2, 30000);
      function changingGame2() {
        client.user.setGame("$help on" + client.user.guilds)
      //}
    }
});

client.on("message", message => {
  const args = message.content.split(" ").slice(1);
  if (message.content.startsWith(config.prefix + "ping")) {
    let ping = Math.round(client.ping)
    message.channel.send("Boink!" + "`" + ping + "ms `");
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
  if (message.content.startsWith(config.prefix + "sd")) {
    if(message.author.id !== config.ownerID) return;
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
    .setFooter("Need Help? Join our support Server!", client.user.avatarURL)
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