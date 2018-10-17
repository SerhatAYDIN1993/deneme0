const Discord = require('discord.js');


exports.run = function(client, message, args) {
      
    var istek = args.slice(0).join(' ');
    var guildID = "412015690967547916";
    var channelID = "501837011150307368";

    if (!istek){
           return message.reply("Bir mesaj belirtin! Doğru kullanımı: **&istek <mesajınız>**");
          } else {
               
              var embed = new Discord.RichEmbed()
              .setTimestamp()
              .addField("Eylem:","Öneri")
              .addField("Kullanıcı:", message.author.tag)
              .addField("ID", message.author.id)
              .addField("İstek", istek)

              client.guilds.get(guildID).channels.get(channelID).send(embed);
              message.channel.send("İsteğiniz Alınmıştır.Teşekkür Ederiz...");



          };



};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['istek','i'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'istek', //adını belirledik (kullanmak için gereken komut)
  description: 'istekleriniz', //açıklaması
  usage: 'istek <mesaj>' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz