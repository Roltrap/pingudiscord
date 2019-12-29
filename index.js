const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const active = new Map();

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.lengt <= 0) {
        console.log("Kon geen files vinden.");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen.`);

        bot.commands.set(fileGet.help.name, fileGet);

    })

});


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online en is gereed voor gebruik.`);

    bot.user.setActivity("Mats - Roltrap", { type: "LISTENING" });

});

bot.on("guildMemberAdd", member => {

    var role = member.guild.roles.find("name", "Bezoeker");

    if (!role) return;

    member.addRole(role);

    const channel = member.guild.channels.find("name", "🙋welkom");

    if (!channel) return;

    channel.send(`Welkom op de **WaldCraft Discord** ${member}! Veel plezier 🎉😄.`)

})

bot.on("message", async message => {

    // Als bot bericht stuurt stuur dan return
    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);


    var commands = bot.commands.get(command.slice(prefix.length));


    var options = {

        active: active

    }


    if (commands) commands.run(bot, message, arguments, options);


    // if (command === `${prefix}hallo`) {

    //    return message.channel.send("Hallo! Ik ben de officiële Discord bot van de **veilsimpel. - Discord server**. Wilt u meer weten over mij? Doe dan `!botinfo` of `!help`. Heeft u een andere vraag? Stel deze dan aan een van onze medewerkers.");

    // }

    // if (command === `${prefix}botinfo`) {

    //    var botIcon = bot.user.displayAvatarURL;

    //    var botEmbed = new discord.RichEmbed()
    //        .setDescription("**veilsimpel. - Bot Informatie**")
    //        .setColor("#4cda49")
    //        .setThumbnail(botIcon)
    //        .addField("Bot naam", bot.user.username)
    //        .addField("Bot gemaakt door", "Mats - Roltrap")
    //        .addField("Bot gemaakt op", bot.user.createdAt);


    //    return message.channel.send(botEmbed);

    // }

    if (command === `${prefix}serverinfo`) {

    }

    if (command === `${prefix}kick`) {

        var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

        if (!kickUser) return message.channel.send("Deze gebruiker is niet gevonden op de Discord server.");

        var reason = arguments.join(" ").slice(22);

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("U heeft geen toestemming om dit commando uit te voeren.");

        if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("U probeert een stafflid te kicken. Dat mag niet van mij.");

        var kick = new discord.RichEmbed()
            .setDescription("**WaldCraft - Kick**")
            .setColor("#ee0000")
            .addField("Kicked gebruiker", kickUser)
            .addField("Gekicked door", message.author)
            .addField("Reden", reason);

        var kickChannel = message.guild.channels.find(`name`, "⚔️kick-log");
        if (!kickChannel) return message.guild.send("Lieve Roltrap, ik kan het log channel niet vinden! Fix dit ff thanks alvast <3 .");

        message.guild.member(kickUser).kick(reason);

        kickChannel.send(kick);

        return;

    }

    if (command === `${prefix}ban`) {

        var banUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

        if (!banUser) return message.channel.send("Deze gebruiker is niet gevonden op de Discord server.");

        var reason = arguments.join(" ").slice(22);

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("U heeft geen toestemming om dit commando uit te voeren.");

        if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("U probeert een stafflid te bannen. Dat mag niet van mij.");

        var ban = new discord.RichEmbed()
            .setDescription("**WaldCraft - Ban**")
            .setColor("#ee0000")
            .addField("Banned gebruiker", banUser)
            .addField("Gebanned door", message.author)
            .addField("Reden", reason);

        var banChannel = message.guild.channels.find(`name`, "⚔️ban-log");
        if (!banChannel) return message.guild.send("Lieve @Roltrap, ik kan het log channel niet vinden! Fix dit ff thanks alvast <3 .");

        message.guild.member(banUser).ban(reason);

        banChannel.send(ban);

        return;

    }

});


bot.login(process.env.token);