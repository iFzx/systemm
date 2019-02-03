const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});


client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});

client.on('message', message => {

          if(message.content === prefix + "hchannel") {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
                 message.channel.overwritePermissions(message.guild.id, {
                 READ_MESSAGES: false
     })
                  message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
     }
    });
    


    client.on("message", message => {
                
            if(!message.channel.guild) return;
     if(message.author.bot) return;
        if(message.content === prefix + "savatar"){ 
            const embed = new Discord.RichEmbed()
    
        .setTitle(`${message.guild.name}.png`)
    .setAuthor(message.author.username, message.guild.iconrURL)
      .setColor(0x164fe3)
      .setImage(message.guild.iconURL)
      .setURL(message.guild.iconrURL)
                      .setTimestamp()
  
     message.channel.send({embed});
        }
    });


    client.on('message',function(message) {
      if (message.author.bot) return;
 
                      if(!message.channel.guild) return;
    
                        if (message.content === prefix + "fm") {
     const embed = new Discord.RichEmbed()
    
        .setDescription(`**Members info :sparkles:
    :green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
    :heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
    :yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
    :diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
    :bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
             message.channel.send({embed});
    
        }
          });

          client.on("message", message => {
   
         if (message.content === "+help") {
             message.channel.send(' ');
          const embed = new Discord.RichEmbed() 
              .setColor("RANDOM")
              .setDescription(`
              __**Administrative Commands**__
            **  『+move @user / لسحب الشخص الى روومك』
              『+bc / رسالة جماعية الى كل اعضاء السيرفر』
              『+hchannel / اخفاء الشات』
              『+schannel / اضهار الشات المخفية』
              『+clear / مسح الشات』
              『+mute @user <reason> / اعطاء العضو ميوت لازم رتبة <Muted>』
              『+unmute @user / لفك الميوت عن الشخص 』
              『+kick @user <reason> / طرد الشخص من السيرفر』
              『+ban @user <reason> / حضر الشخص من السيرفر』
              『+mutechannel / تقفيل الشات』
              『+unmutechannel / فتح الشات』
              『+fm / حالة الأغضاء』
              『+savatar / صورة السيرفر』
              『+uptime / مدة رفع البوت』
              『+vkick / طرد من الروم الصوتي』
              『+voice / كم واحد في الروم الصوتي』
        `)
           message.author.sendEmbed(embed)
            
           }
           }); 


           client.on('message', async message =>{
            if (message.author.boss) return;
          
          if (!message.content.startsWith(prefix)) return;
              let command = message.content.split(" ")[0];
               command = command.slice(prefix.length);
              let args = message.content.split(" ").slice(1);
              if (command == "mute") {
                  if (!message.channel.guild) return;
                  if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
                  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
                  let user = message.mentions.users.first();
                  let muteRole = message.guild.roles.find("name", "Muted");
                  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
                  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
                  let reason = message.content.split(" ").slice(2).join(" ");
                  message.guild.member(user).addRole(muteRole);
                  const muteembed = new Discord.RichEmbed()
                  .setColor("RANDOM")
                  .setAuthor(`Muted!`, user.displayAvatarURL)
                  .setThumbnail(user.displayAvatarURL)
                  .addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
                  .addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
                  .addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
                  .addField("User", user, true)
                  message.channel.send({embed : muteembed});
                  var muteembeddm = new Discord.RichEmbed()
                  .setAuthor(`Muted!`, user.displayAvatarURL)
                  .setDescription(`      
          ${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
          ${message.author.tag} تمت معاقبتك بواسطة
          [ ${reason} ] : السبب
          اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
          `)
                  .setFooter(`في سيرفر : ${message.guild.name}`)
                  .setColor("RANDOM")
              user.send( muteembeddm);
            }
          if(command === `unmute`) {
            if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))
          
            let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
            if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
          
            let role = message.guild.roles.find (r => r.name === "Muted");
            
            if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
          
            await toMute.removeRole(role)
            message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
          
            return;
          
            }
          
          });





          client.on('message', message => {

                   if(message.content === prefix + "mutechannel") {
                                       if(!message.channel.guild) return message.reply('** This command only for servers**');
            
               if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                          message.channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
            
                          }).then(() => {
                              message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
                          });
                            }
            //FIRE BOT
                if(message.content === prefix + "unmutechannel") {
                                    if(!message.channel.guild) return message.reply('** This command only for servers**');
            
               if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                          message.channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: true
            
                          }).then(() => {
                              message.reply("**__تم فتح الشات__:white_check_mark:**")
                          });
                }
                   
            });   






            client.on('message', message => {


              if (!message.content.startsWith(prefix)) return;
              var args = message.content.split(' ').slice(1);
              var argresult = args.join(' ');
              if (message.author.id == 405828008759525378) return;
            
            
            if (message.content.startsWith(prefix + 'playing')) {
            if (message.author.id !== '405828008759525378','294980175253209089') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
            client.user.setGame(argresult);
                message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
            } 
            
             
            if (message.content.startsWith(prefix + 'streem')) {
            if (message.author.id !== '405828008759525378','294980175253209089') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
            client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
                message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
            } else
            
            if (message.content.startsWith(prefix + 'name')) {
            if (message.author.id !== '405828008759525378','294980175253209089') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
              client.user.setUsername(argresult).then
                  message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
              return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
            } else
                
            if (message.content.startsWith(prefix + 'image')) {
            if (message.author.id !== '405828008759525378','294980175253209089') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
            client.user.setAvatar(argresult);
                message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
            } else
            
            
            if (message.content.startsWith(prefix + 'watching')) {
            if (message.author.id !== '405828008759525378','294980175253209089') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
                client.user.setActivity(argresult, {type : 'watching'});
             message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
            }
            
             });

           client.on('message', message => {

           if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + 'clear')) {
        if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
        let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
        let request = `Requested By ${message.author.username}`;
        message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
        msg.react('✅')
        .then(() => msg.react('❌'))
        .then(() =>msg.react('✅'))
        
        let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
        let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
        
        let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
        let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
        reaction1.on("collect", r => {
        message.channel.send(`Chat will delete`).then(m => m.delete(5000));
        var msg;
                msg = parseInt();
        
              message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
              message.channel.sendMessage("", {embed: {
                title: "`` Chat Deleted ``",
                color: 0x06DF00,
                footer: {
        
                }
              }}).then(msg => {msg.delete(3000)});
        
        })
        reaction2.on("collect", r => {
        message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
        msg.delete();
        })
        })
        }
        });


           client.on('message', message => {


                  if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + 'bc')) {
        if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
        if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
        let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
        let copy = "System";
        let request = `Requested By ${message.author.username}`;
        if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
        msg.react('✅')
        .then(() => msg.react('❌'))
        .then(() =>msg.react('✅'))
        
        let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
        let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
        
        let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
        let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
        reaction1.on("collect", r => {
        message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
        message.guild.members.forEach(m => {
        
        var bc = new
           Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle('Broadcast')
           .addField('المرسل', message.author.username)
           .addField('الرسالة', args)
           .setThumbnail(message.author.avatarURL)
           .setFooter(copy, client.user.avatarURL);
        m.send({ embed: bc })
        msg.delete();
        })
        })
        reaction2.on("collect", r => {
        message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
        msg.delete();
        })
        })
        }
        });
    
    client.on('message', message => {
          if(message.content === prefix + "schannel") {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
                 message.channel.overwritePermissions(message.guild.id, {
                 READ_MESSAGES: true
     })
                  message.channel.send('Done  ')
     }
    });

    client.on('message', message => {
      if(message.author.bot) return;
      if(message.channel.type === 'dm') return;
        if(message.content.toLowerCase().startsWith(prefix + "uptime")) {
          let upTime = process.uptime();
      
          let days = Math.floor(upTime / 86400);
          upTime %= 86400;
      
          let hrs = Math.floor(upTime / 3600);
          upTime %= 3600;
      
          let min = Math.floor(upTime / 60);
          let sec = Math.floor(upTime % 60);
      
          message.channel.send(``${days} days, ${hrs} hrs, ${min} min, ${sec} sec``);
        }
    });

    client.on("message", message => {
      let men = message.mentions.users.first();
      if(message.content.startsWith(prefix + "vkick")) {
        try {
        if(!men) {
          message.channel.send("**الرجاء اخيار شخص لطرده !**");
          return;
        }
        if(!message.guild.member(men).voiceChannel) return message.channel.send("المراد طرده ليس في الغرف الصوتيه!");
        if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لديك صلحيات سحب الاعضاء")
        if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لدي الصلاحيه لسحب الاعضاء");
           if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ليست لدي الصلاحيات لانشاء رومات صوتيه")
    
        message.guild.createChannel("AgentX VKick", "voice").then(c => {
          message.guild.member(men).setVoiceChannel(c.id)
        setTimeout(() => {
          c.delete()
        }, 100)
        });
        message.channel.send(`**لقد تم طرده من الرومات الصوتيه ``${men.username}``**`)
    } catch (e) {
      message.channel.send("لا يمكنني القيام بذلك بسبب الصلاحيات او ما شابه");
    }
      }
    });


    let rebel;
client.on("ready", async  => {
    let guild = client.guilds.get("541176481330626562");
  let users = guild.members.map(member => member.user.id);
  let i;
  rebel=0;
for (i=0 ; i < users.length ; i++) {
 let   check = guild.members.get(users[i]);
if(!check.voiceChannelID){
        continue;
}else{
  rebel++;
}
}
guild.channels.find('id', '541724465030103058').setName("Voice Online「"+rebel+"」");
  client.setInterval(() =>{
    let d = Date.now()
  }, 5000);
});
client.on('voiceStateUpdate', (oldMember, newMember) => {
    let guild = client.guilds.get("541176481330626562");
let newUserChannel = newMember.voiceChannel
let oldUserChannel = oldMember.voiceChannel
 if(oldUserChannel === undefined && newUserChannel !== undefined) {
   rebel++;
guild.channels.find('id', '541724465030103058').setName("Voice Online「"+rebel+"」");
} else if(newUserChannel === undefined){
  rebel--;
guild.channels.find('id', '541724465030103058').setName("Voice Online「"+rebel+"」");
}
});
client.on('message', Codes => {
 
  if(Codes.content === "+voice") {
      Codes.channel.send(" Voice「"+rebel+"」");
}
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء