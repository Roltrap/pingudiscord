const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categorieId = "629027972753522731";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var bool = false;

    message.guild.channels.forEach((channel) => {

        if (channel.name == "ticket-" + userName.toLowerCase() + "#" + userDiscriminator) {

            message.channel.send("U heeft al een ticket open staan. Stel hier uw nieuwe vraag in.");

            bool = true;

        }

    });

    if (bool == true) return;

    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Goedendag, " + message.author.username.toString())
        .setColor("#4cda49")
        .setDescription("Uw ticket wordt geopend. Ga naar het aangemaakte kanaal toe.")
        .setFooter("© World Bot")
        .setTimestamp();

    message.channel.send(embedCreateTicket);

    message.guild.createChannel("ticket-" + userName + "#" + userDiscriminator, "text").then((createdChan) => {

        createdChan.setParent(categorieId).then((settedParent) => {

            settedParent.overwritePermissions(message.guild.roles.find(`name`, "@everyone"), { "READ_MESSAGES": false });
            settedParent.overwritePermissions(message.guild.roles.find(`name`, "Support"), { "READ_MESSAGES": true });

            settedParent.overwritePermissions(message.author, {

                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true

            });

            var embedParent = new discord.RichEmbed()
                .setTitle("Goedendag, " + message.author.username.toString())
                .setColor("#4cda49")
                .setDescription("Zet hier de volgende dingen in: uw vraag en/of opmerking.")
                .setFooter("© World Bot")
                .setTimestamp();

            settedParent.send(embedParent);

        }).catch(err => {
            message.channel.send("Helaas heb ik iets fout gedaan. Roltrap moet mij dat nog even leren! Tagg hem even hieronder om dat te laten weten. Bedankt alvast.");
        });


    }).catch(err => {
        message.channel.send("Helaas heb ik iets fout gedaan. Roltrap moet mij dat nog even leren! Tagg hem even hieronder om dat te laten weten. Bedankt alvast.");
    });



}

module.exports.help = {
    name: "ticket"
}