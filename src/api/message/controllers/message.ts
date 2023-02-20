export default {
  getBlogs: async (ctx, next) => {
    try {
      const data = await strapi
        .service("api::message.message")
        .getBlogs();

      ctx.response.body = data;
    } catch (error) {
      console.log('controller', error)
    }
  },
  getFilteredBlogs: async (ctx, next) => {
    const { topic } = ctx.query
    // console.log(filter)
    try {
      const data = await strapi
        .service("api::message.message")
        .getFilteredBlogs(topic);

      ctx.response.body = data;
    } catch (error) {
      console.log('controller', error)
    }
  },
  exampleAction1: async (ctx, next) => {
    return ctx;
  },
};
