const fs = require("fs");
const Discord = require('discord.js');
const bot = new Discord.Client();

var date = new Date();
var minutes = date.getMinutes();
var hour = date.getHours();
var countMsg = 0;
var responses = new Array();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleResponse(content) {

    var splits = content.split(":");
    var keys = splits[1].split("|");
    var res = splits[2];

    for(var i = 0; i < keys.length; i++) {
        var key = keys[i].toLowerCase();

        if (typeof responses[key] === 'undefined') {
            responses[key] = new Array();
        }

        responses[key].push(res);
    }
}

bot.on('ready', () => {
  //This fires in Terminal
  console.log('BOT IS ONLINE!');
  console.log("The current time is:", Intl.DateTimeFormat().resolvedOptions().timeZone, "//" , hour, ":", minutes);
});

bot.on('message', message => {
  if (message.author.username == "super-bot") return;

  var content = message.content;

      if (content.startsWith("addresponse:")) {
          handleResponse(content);

          fs.appendFile("responses.txt", content + "\r\n", "utf8", function(err) {
              if (err) console.log(err);
          });

          return;
      }

      content = content.toLowerCase();

      var contents = content.split(" ");

      for(var i = 0; i < contents.length; i++) {
          var c = contents[i];

          if (typeof responses[c] !== 'undefined') {
              var r = responses[c];
              var m = r[getRandomInt(0,r.length-1)]
              message.channel.sendMessage(m);
              return;
          }

          for (var j = i+1; j <= contents.length; j++) {
           console.log(c);

           if (typeof responses[c] !== 'undefined') {
                var r = responses[c];
               var m = r[getRandomInt(0,r.length-1)]
              message.channel.sendMessage(m);
               return;
           }

           if (j < contents.length){
             c += " " + contents[j];
           }
       }
      }




  fs.readFile("responses.txt", "utf8", (err,data) => {
        if (err) {
            console.log(err);
            return;
        }

        var lines = data.split("\r\n");
        for(var i = 0; i < lines.length; i++) {
            if (lines[i].startsWith("addresponse:"))
                handleResponse(lines[i]);
        }
    });

    console.log('RESPONSE MADE');

});

bot.login('API TOKEN GOES HERE');
