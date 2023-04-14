const amqp = require('amqplib');
const EXCHANGE  =  process.env.IDFY_INSTRUMENTER_EXCHANGE || 'idfy-instrumenter'; // TODO: ENV['IDFY_INSTRUMENTER_EXCHANGE'] 
const AMQP_URL = process.env.IDFY_INSTRUMENTER_AMQP_URL || 'amqp://localhost';  // TODO: ENV[IDFY_INSTRUMENTER_AMQP_URL] READ this from ENV or use local

class RMQSink {
  async publish(event, headers = {}) {
    let result = true;
    
    try {
      const connection = await amqp.connect(AMQP_URL);
      const channel = await connection.createChannel();
  
      await channel.assertQueue(EXCHANGE, { durable: true });
      channel.sendToQueue(EXCHANGE, Buffer.from(JSON.stringify(event)), { headers }, (error) => {
        if (error) {
          console.error(`Error while publishing to queue: ${error}`);
          result = false;
        }
      });
  
      setTimeout(() => {
        connection.close();
        process.exit(0);
      }, 500);
    } catch (error) {
      console.error(`Error while connecting to queue: ${error}`);
      result = false;
    }
    
    console.log('Returning from RMQ!!!');
    return result;
  }
}

module.exports = RMQSink;