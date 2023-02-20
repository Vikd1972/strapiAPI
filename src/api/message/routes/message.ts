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
      path: '/message',
      handler: 'message.setBlog',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
