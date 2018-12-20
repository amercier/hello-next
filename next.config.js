const assetPrefix = require(`${__dirname}/package`).baseUrl || '';
const fetch = require('isomorphic-unfetch');

module.exports = {
  assetPrefix,
  exportPathMap: async function () {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await response.json();
    console.log(`Show data fetched. Count: ${data.length}`);

    const shows = data.reduce((previousShows, { show }) => ({
      [`/p/${show.id}`]: {
        page: '/post',
        query: { id: show.id },
      },
      ...previousShows
    }), {});

    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      ...shows
    };
  },
};
