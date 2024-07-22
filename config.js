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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_33_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwLFxuICAgICAgICAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk2LFxuICAgICAgICA4NyxcbiAgICAgICAgNTksXG4gICAgICAgIDI3LFxuICAgICAgICA4NSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxLFxuICAgICAgICA1NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MixcbiAgICAgICAgOTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDAsXG4gICAgICAgIDQwLFxuICAgICAgICA1NixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NixcbiAgICAgICAgMTQsXG4gICAgICAgIDc2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI4LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDkzLFxuICAgICAgICA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM0LFxuICAgICAgICA2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDMsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjU5UHlTNVZMbkNESGNCYlg2elFoSmJYMVp3NmhlYTZtakxxd0dxcEtncWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxDQUhMUEs5UTk2ZFkyVzVvcDVnLUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzVjY2I5YzgtMjljOS00NTFkLWJlMTYtNTk3YTY3ZmJkZjY5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NSxcbiAgICAgIDEyNyxcbiAgICAgIDIwMSxcbiAgICAgIDIxNCxcbiAgICAgIDgsXG4gICAgICA3NSxcbiAgICAgIDYzLFxuICAgICAgMjExLFxuICAgICAgMTkwLFxuICAgICAgMjYsXG4gICAgICAxODAsXG4gICAgICAyNCxcbiAgICAgIDgsXG4gICAgICAyNTQsXG4gICAgICA4MixcbiAgICAgIDE0OCxcbiAgICAgIDE2NixcbiAgICAgIDg1LFxuICAgICAgMTcyLFxuICAgICAgOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA1LFxuICAgICAgMTYxLFxuICAgICAgMjU0LFxuICAgICAgMTYyLFxuICAgICAgMjUxLFxuICAgICAgMTY2LFxuICAgICAgMTE0LFxuICAgICAgMTQ5LFxuICAgICAgNTIsXG4gICAgICAyMTUsXG4gICAgICAxMDgsXG4gICAgICAyMzQsXG4gICAgICA5MixcbiAgICAgIDc3LFxuICAgICAgMTM1LFxuICAgICAgMTg0LFxuICAgICAgMTA5LFxuICAgICAgNDcsXG4gICAgICAxNTIsXG4gICAgICA0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEQjdNUzlQUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzMzIwMTkwODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTc2NTk5MDMxODkwMDI6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOSy9wL01ERUw2OCs3UUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImNqNkN3TThlMXREejlMR01FUkJOMytGZkxpWmZvKzJqbHpmc3JXS1Raa3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK21BN2FKYi9BQ0haSmRmcVdTVEQzUkMxeks2T2F0bEZGZGpxa3ZRbkhXZjMzbVNOUXRhWk1pTjVZTjFJTEFOZXV3WE1aT1ZDdEt1NWc4bEhKdkFvRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYnhIaTlxVmZoaUwxVGpJb3FHbFQxNXJSOStUTHJNSlVIeEJVS3VYN2pjQ3cxN0pseUg3djNoNlZLNkR0UU44dVJMdEV0bVBDNGF5SXVVcDEwem5jQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzMzIwMTkwODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjg3NjE3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRSsxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFKzEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlR1Y4VWxqR1pGdEtkaHpiUFc5R3JVR3lDb1hacUFiYWNRd2RZRjBueU40PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNDcxMjU5NzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTE0NzczNTA0MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
