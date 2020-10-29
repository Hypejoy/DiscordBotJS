# DiscordBotJS

A simple Discord Bot with a .txt file to send out simple responses and server greetings.

# Clone or Download 

Mount these files in your respected directory that you will use to host these files running a NodeJS command in Terminal. I won't go over how to create a Discord API Bot. Familiarize yourself with linking the bot to your server on your own at https://discord.com/developers/docs/topics/oauth2. Then find the oauth2 link to your server and that's it! 

# 1. Setup 

`cd or mkdir discord-bot` cd the files to somewhere specific or create a new directory

`npm install` to install dependencies 

`bot.login('API TOKEN GOES HERE');` edit token in App.JS to properly get bot running on Discord

`node app.js` to run the bot 


# 2. Keeping the Bot Running after closing Terminal

Using Forever https://www.npmjs.com/package/forever

`npm i -g forever` 

`forever start app.js` To Start App

`forever stop app.js` To Stop App

`forever stopall` If you get a hangup use "Stop All" Instead.

That's it!


# 3. Edit Responses .TXT File

Create your own responses in the .txt file and restart your node app! 

'addresponse:ServerGreeting:  Hello! Welcome to my Discord channel! '


# 4. Extend this bot

Head on over to https://discord.js.org/#/ to enable GUID rankings, server commands, and more! 
