const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    return message.channel.send("Hallo! Ik ben de officiële Discord bot van **World Company**. Wilt u meer weten over mij? Doe dan `?botinfo` of `?help`. Heeft u een andere vraag? Stel deze dan aan een van onze medewerkers.");

    
}

module.exports.help = {
    name: "hallo"
}