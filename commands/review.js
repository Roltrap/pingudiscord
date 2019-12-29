const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const aantalSterren = args[0];

    if (!aantalSterren || aantalSterren < 1 || aantalSterren > 5) return message.channel.send("Gebruik het commando alsvolgt: !review <Aantal sterren tussen de 1 en 5> <Jouw review>");

    const bericht = args.splice(1, args.length).join(` `) || `Geen bericht meegegeven!? Zal ik dan maar wat bedenken :)? Dag schattekes hou van jullie!`;

    var reviewChannel = message.guild.channels.find("name", "reviews");
    if (!reviewChannel) return message.channel.send("Lieve @Roltrap, ik kan het log channel niet vinden! Fix dit ff thanks alvast <3 .");

    var sterren = "";

    for (var i = 0; i < aantalSterren; i++) {
        sterren += ":star: ";
    }

    message.delete();

    var icon = message.guild.iconURL;

    const review = new discord.RichEmbed()
        .setTitle(`**World Company - Review**`)
        .setColor(`#4cda49`)
        .setThumbnail(icon)
        .addField("Review van", message.author.username)
        .addField("Aantal sterren", `${sterren}`)
        .addField("Review", `${bericht}`)
        .setFooter("© World Company")
        .setTimestamp();

    message.channel.send(`Bedankt voor jouw review. Je kan hem vinden in het reviews kanaal.`);
    return reviewChannel.send(review);

}

module.exports.help = {
    name: "review",
    descripton: "Review command"
};