export default {
  routes: [
    {
      method: 'GET',
      path: '/message',
      handler: 'message.getBlogs',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/message/topic',
      handler: 'message.getFilteredBlogs',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/message/:id',
      handler: 'message.exampleAction1',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
