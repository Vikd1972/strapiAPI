/**
 * message service
 */

export default {
  getBlogs: async () => {
    try {
      const blogs = await strapi.entityService.findMany(
        "api::blog.blog", {
        populate: '*',
        sort: { createdAt: 'DESC' },
      }
      );
      return blogs;
    } catch (error) {
      console.log('servises', error)
    }
  },
  getFilteredBlogs: async (topic) => {
    try {
      const blogs = await strapi.entityService.findMany(
        "api::blog.blog", {
        populate: '*',
        sort: { createdAt: 'DESC' },
        filters: { topic: topic },
      }
      );
      return blogs;
    } catch (error) {
      console.log('servises', error)
    }
  },
  setBlog: async (blog) => {
    try {
      await strapi.entityService.create(
        "api::blog.blog", {
        populate: '*',
        data: blog,
      }
      );

      const blogs = await strapi.entityService.findMany(
        "api::blog.blog", {
        populate: '*',
        sort: { createdAt: 'DESC' },
      }
      );
      return blogs;
    } catch (error) {
      console.log('servises', error)
    }
  }
};
