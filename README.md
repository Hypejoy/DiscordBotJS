# DiscordBotJS

A simple Discord Bot with a .txt file to extend out simple responses.

# Clone or Download 

Mount these files in your respected directory that you will use to host these files running a NodeJS command in Terminal. I won't go over how to create a Discord Api Bot. You should be familiarize yourself with linking the bot to your server on your own at https://discord.com/developers/docs/topics/oauth2. Then find the oauth2 link to your server and invite / add your bot! 

# Setup 

`cd or mkdir discord-bot` cd the files to somewhere specific or create a new directory

`npm install` to install dependencies 

`bot.login('API TOKEN GOES HERE');` edit token in App.JS to properly get bot running on Discord

`node app.js` to run the bot 


# Keeping the Bot Running after closing Terminal

Using Forever 

`npm i -g forever` 

`forever start app.js` 

That's it!


# Edit Responses .TXT File

Create your own responses in the .txt file and restart your node app! 
