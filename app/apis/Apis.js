import Config from './Config';

const Apis = {
  // 文章详情
  getArticleType: `${Config.url}category/wow`,
  getArticleList: `${Config.url}data/`,
  getIndexData: `${Config.url}musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=701075963&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1512548815061`,
  getRank: `${Config.url}v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1541477222065`,
  getHotWord: `${Config.url}splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1541477223518`,
};

export default Apis;
