export default {
  getBlogs: async (ctx, next) => {
    try {
      const data = await strapi
        .service("api::message.message")
        .getBlogs();

      ctx.response.body = data;
    } catch (error) {
      console.log(error)
    }
  },
  getFilteredBlogs: async (ctx, next) => {
    const { topic } = ctx.query
    try {
      const data = await strapi
        .service("api::message.message")
        .getFilteredBlogs(topic);

      ctx.response.body = data;
    } catch (error) {
      console.log(error)
    }
  },
  setBlog: async (ctx, next) => {
    const blog = ctx.request.body
    try {
      const data = await strapi
        .service("api::message.message")
        .setBlog(blog);

      ctx.response.body = data;
    } catch (error) {
      console.log(error)
    }
  },
};
