const { Client } = require('whatsapp-web.js');
const fs = require("fs");
const SESSION_FILE_PATH = require("./src/utils/constants");
const Authentication = require("./src/modules/events/authentication");
const Messaging = require("./src/modules/events/messaging");

function init() {

    // Load the session data if it has been previously saved
    let sessionData;

    const client = new Client();
    const auth = new Authentication(client, sessionData);
    const messaging = new Messaging(client);
    auth.authenticate();
    messaging.listenEvents();
    client.initialize();
}

init();


