import NewsData from '../NewsData';

const getNewsData = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(NewsData);
    }, 3000);
  });
};

export const newsService = {getNewsData};

export default newsService;
