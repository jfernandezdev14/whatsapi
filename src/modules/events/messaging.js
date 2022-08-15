

class Messaging {
    constructor(client) {
        this.client = client;
    };

    listenEvents() {
        this.client.on('message', message => {
            console.log(message.author);
            console.log(message.from);
            console.log(message.body);
            console.log("----------");
            if(message.body === 'Hola') {
                message.reply('Quien eres');
            }
        });
    };
};
module.exports = Messaging