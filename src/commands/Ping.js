class Ping {
    constructor(client) {
        this.client = client;
        this.name = 'ping';
    }
    
    execute(message) {
        return message.channel.send('pong');
    }
}

module.exports = Ping;