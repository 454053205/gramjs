// if you're using TS import from here
//const {TelegramClient} = require("telegram/gramjs");
//const {StringSession} = require("telegram/gramjs/sessions");
// if you're not then import from here
const { TelegramClient } = require('telegram/dist')
const { StringSession } = require('telegram/dist/sessions');

(async () => {
    console.log('Loading interactive example...')
    const apiId = -1 // put your api id here [for example 123456789]
    const apiHash = '' // put your api hash here [for example '123456abcfghe']
    const client = new TelegramClient(new StringSession(''), apiId, apiHash, {
        connectionRetries: 3,
    })
    await client.start({
        botAuthToken: 'YOUR BOT TOKEN',

    })
    console.log('You should now be connected.')
    console.log(await client.getMe())
    // USE THIS STRING TO AVOID RELOGGING EACH TIME
    console.log(await client.session.save())
})()
