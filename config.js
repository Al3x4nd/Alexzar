const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://king:sukuna@cluster0.dh59i5n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Al3x4nd/Alexzar";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/5586498428951fc1a0f21.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "༒ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝕶𝖎𝖓𝖌𝖘𝖚𝖐𝖚𝖓𝖆༒" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347071381634";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349133201908";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/5586498428951fc1a0f21.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_42_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0LFxuICAgICAgICAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAyMzksXG4gICAgICAgIDg4LFxuICAgICAgICA3NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDQzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDc0LFxuICAgICAgICA5MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDQxLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1LFxuICAgICAgICA4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDk0LFxuICAgICAgICA5MixcbiAgICAgICAgMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjksXG4gICAgICAgIDU5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRR0hpQ3JFbm1ZMGlwOHA3TjEveUUyVmNidjVyVGhUTEo2NkhxSStha2xvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMDY0NDQyOTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMwMDA4REMxN0QyOUE2NkRCNDcwMDFDRUExQUJCODM2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjE5MjE2MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMDY0NDQyOTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI2RDEwODgzMDM0NjA5N0U1NzY2ODZBRDVGNzYxMEJBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjE5MjE2MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnOXVEUWd0X1JZV0NkUEk5ajBsSFJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFlODc0N2JiLWZjMmItNGZkMy1hNjIxLTIzNzAwZjE0NDE3OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNyxcbiAgICAgIDUsXG4gICAgICAxMjcsXG4gICAgICAxMDYsXG4gICAgICAxNTAsXG4gICAgICA1OCxcbiAgICAgIDI1LFxuICAgICAgMixcbiAgICAgIDc3LFxuICAgICAgMjQsXG4gICAgICAxNTQsXG4gICAgICAyMTMsXG4gICAgICA5OCxcbiAgICAgIDgzLFxuICAgICAgMTcxLFxuICAgICAgMTcyLFxuICAgICAgMjEsXG4gICAgICAyNixcbiAgICAgIDY2LFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgMTk5LFxuICAgICAgMTQwLFxuICAgICAgMTcyLFxuICAgICAgMTksXG4gICAgICAyMTksXG4gICAgICAxMDksXG4gICAgICA4NyxcbiAgICAgIDI1LFxuICAgICAgMjgsXG4gICAgICAxMjQsXG4gICAgICAwLFxuICAgICAgMjA4LFxuICAgICAgMjA5LFxuICAgICAgMTY3LFxuICAgICAgMjQxLFxuICAgICAgMjM5LFxuICAgICAgMjAyLFxuICAgICAgMjksXG4gICAgICAxNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1g2MkFFNllcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDY0NDQyOTE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgyMzkwNjAxMzQ3MzE0OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2UhPCdlKnwnZSi8J2UtfCdlLfwnZSe8J2UrzvigaApXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHYwbGU0REVKcWltclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3ZXVkeXZ0RzNVaUt3Qi80bjRCdVJYTVk4ZVd6VWkyb1QzRnp1cnBVR0RZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkN1MDRnclF3Z3ZlaTF6MzNBQnV5dkpvdlAreXFHaWJUUCtRM0M3VGRqdUdHZWFSZiszZGdpNFM4QnplMTVyUDIyUFRMNFU3MXVmMVlVTDJreGNOMUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm01YlpmaEU2Nm00LzRCNDZTYkR6aVVjQ2ttc09nT1hOVmovOGNUd3FlZWRFZlZ0V3dJc3F6eDV2dnM4bUdzaW5jeTZBTGkwY0JBb0tHd1pNb09JSGhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDY0NDQyOTE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxOTIxNTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNUWJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1RYi5qc29uIjogIntcImtleURhdGFcIjpcIjdiR0JnZlBRSFU3YS9JV0xTZCtQR28rYVRxNzRzM3VWU1ozdUFRcGdLOTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAzNjM1MjA1OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMTkyMTU5OTI4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "༒ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝕶𝖎𝖓𝖌𝖘𝖚𝖐𝖚𝖓𝖆༒" , // ```『 ༒ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝕶𝖎𝖓𝖌𝖘𝖚𝖐𝖚𝖓𝖆༒ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝐵𝑈𝐷𝐷𝑌_𝐵𝛩𝑇",
  packname: process.env.PACK_NAME || "卂ㄥ乇乂乙卂尺",
  botname : process.env.BOT_NAME  || "𝐵𝑈𝐷𝐷𝑌_𝐵𝛩𝑇",
  ownername:process.env.OWNER_NAME|| "卂ㄥ乇乂乙卂尺",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
