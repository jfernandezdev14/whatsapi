const fs = require('fs');
const qrcode = require('qrcode-terminal');
const SESSION_FILE_PATH = require("../../utils/constants");


class Authentication {
    constructor(client, session) {
        this.client = client;
        this.session = session;
    };

    authenticate() {

        this.client.on('qr', qr => {
            qrcode.generate(qr, {small: true});
        });

        this.client.on('authenticated', (session) => {
            this.session = session;
            fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
                if (err) {
                    console.error(err);
                }
            });
        });
        this.client.on('ready', () => {
            console.log('Client is ready!');
        });
    };
}

module.exports = Authentication