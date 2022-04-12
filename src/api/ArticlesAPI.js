import axios from 'axios';

const GetArticles = async (section) => {
  const response = await axios.get(`https://hacker-news.firebaseio.com/v0/${section}.json`)
  const promises = []
  for (let i = 0; i < 10; i ++) {
    let articleResponse = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json`)
    promises.push(articleResponse.data)
  }
  return promises
};

const fetchArticleList = async (idList) => {
  let tempList = []
  for (let i=0; i < idList.length; i++) {
    let articleResponse = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${idList[i]}.json`)
    tempList.push(articleResponse.data)
  }
  return tempList
}

const fetchArticle = async (article_id) => {
  let articleResponse = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${article_id}.json`)
  return await articleResponse.data
}

const myExports = {GetArticles, fetchArticle, fetchArticleList}
export default myExports