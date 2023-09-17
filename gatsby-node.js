// async function createWebsitePages(
//   pathPrefix = '/',
//   graphql,
//   actions,
//   reporter
// ) {
//   const { createPage } = actions;
//   const result = await graphql(`
//     query WebsitePagesQuery {
//       allContentfulPage(filter: { pageLayout: { eq: "website" } }) {
//         edges {
//           node {
//             id
//             slug
//             pageLayout
//           }
//         }
//       }
//     }
//   `);

//   if (result.errors) throw result.errors;
//   const routeEdges = (result.data.allContentfulPage || {}).edges || [];
//   routeEdges.forEach((edge) => {
//     const { id, slug, pageLayout } = edge.node;
//     let path = '/';
//     if (slug && slug !== '/') {
//       path = [pathPrefix, slug].join('');
//     }
//     reporter.info(`Creating Landing page: ${path} - ${id}`);

//     const templatesMap = {
//       website: require.resolve('./src/templates/website-page.js'),
//     };

//     const component = templatesMap[pageLayout] || templatesMap.website;

//     createPage({
//       path,
//       component,
//       context: { id },
//     });
//   });
// }

// async function createArticles(pathPrefix = '/', graphql, actions, reporter) {
//   const { createPage } = actions;
//   const result = await graphql(`
//     {
//       categories: allContentfulHelpArticleCategory(
//         sort: { fields: sortOrder, order: ASC }
//       ) {
//         nodes {
//           id
//           slug
//           name
//           articles: help_article {
//             id
//           }
//         }
//       }
//       articles: allContentfulHelpArticle(
//         sort: { fields: sortOrder, order: ASC }
//       ) {
//         nodes {
//           id
//           slug
//           title
//           category: kbAppCategory {
//             slug
//           }
//         }
//       }
//     }
//   `);
//   const withArticles = (category) =>
//     Array.isArray(category.articles) && category.articles.length > 0;
//   const categories = result.data.categories.nodes.filter(withArticles);

//   categories.forEach((category) => {
//     createPage({
//       path: `/help/${category.slug}`,
//       component: require.resolve('./src/templates/help-page-category'),
//       context: {
//         id: category.id,
//         name: category.name,
//       },
//     });
//   });

//   // Create article pages
//   result.data.articles.nodes.forEach((article) => {
//     createPage({
//       path: `/help/${article.category.slug}/${article.slug}`,
//       component: require.resolve('./src/templates/help-page.js'),
//       context: {
//         id: article.id,
//         name: article.title,
//       },
//     });
//   });
// }

// async function createBlogPosts(pathPrefix, graphql, actions, reporter) {
//   const { createPage } = actions;
//   const blogPost = require.resolve('./src/templates/blog-post.js');

//   const result = await graphql(
//     `
//       {
//         allContentfulBlogPost {
//           nodes {
//             title
//             slug
//           }
//         }
//       }
//     `
//   );

//   if (result.errors) {
//     reporter.panicOnBuild(
//       `There was an error loading your Contentful posts`,
//       result.errors
//     );
//     return;
//   }

//   const posts = result.data.allContentfulBlogPost.nodes;

//   // Create blog posts pages
//   // But only if there's at least one blog post found in Contentful
//   // `context` is available in the template as a prop and as a variable in GraphQL

//   if (posts.length > 0) {
//     posts.forEach((post, index) => {
//       const previousPostSlug = index === 0 ? null : posts[index - 1].slug;
//       const nextPostSlug =
//         index === posts.length - 1 ? null : posts[index + 1].slug;

//       createPage({
//         path: `/blog/${post.slug}/`,
//         component: blogPost,
//         context: {
//           slug: post.slug,
//           previousPostSlug,
//           nextPostSlug,
//         },
//       });
//     });
//   }
// }

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   await createWebsitePages('/', graphql, actions, reporter);
//   await createArticles('/help', graphql, actions, reporter);
//   await createBlogPosts('/blog', graphql, actions, reporter);
// };
