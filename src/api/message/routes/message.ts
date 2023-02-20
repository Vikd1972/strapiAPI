export default {
  routes: [
    {
      method: 'GET',
      path: '/message',
      handler: 'message.exampleAction',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
