const telegramBot = require("node-telegram-bot-api")

const token = "1670239238:AAHpccOKbC6IOOe0e6T8hwOfOoaWgBddQcQ"

const bot = new telegramBot(token, {polling: true})

bot.onText(/\/pingall/, (msg) => {
    bot.sendMessage(msg.chat.id, "@ameerthameer1  @rusm2  @Z_767  @dd20888  𝑓𝑎♪𝑖𝑚𝑎☁️  @ha_gk18  @amoxiHEDARIN  @Hawraa_jasim  @rahma_ayaad  @H_d_i_a  @m_a_7m  @Khrstomn774  @IQ_Rudy  @h8yat  @Zaid56_iQ  @jung2003  @fernweh2003  @AYLLA_H @DAYDrEaMEr003 @dinawaleed @H102na  كاعدين ؟")
})
