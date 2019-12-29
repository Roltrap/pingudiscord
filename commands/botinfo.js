const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setTitle("**World Company - Bot info**")
        .setDescription("Welkom bij de bot info, " + message.author)
        .setColor("#4cda49")
        .setThumbnail(botIcon)
        .addField("Bot naam", bot.user.username)
        .addField("Bot gemaakt door", "Mats - Roltrap")
        .addField("Bot gemaakt op", bot.user.createdAt)
        .setFooter("© World Company")
        .setTimestamp();

    return message.channel.send(botEmbed)

}

module.exports.help = {
    name: "botinfo"
}