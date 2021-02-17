const { Bootstrap } = require('@midwayjs/bootstrap');
Bootstrap
  .load(
    new (require('@midwayjs/rabbitmq').Framework)().configure({
      url: 'amqp://localhost',
      exchanges: [
        {
          name: 'message_exchange', // 消息推送交换机
          type: 'direct',
          options: {
            durable: true,
          },
        },
        {
          name: 'dlx_message_exchange', // 消息失败的死信交换机
          type: 'direct',
          options: {
            durable: true,
          },
        },
      ],
    })
  )
  .run();