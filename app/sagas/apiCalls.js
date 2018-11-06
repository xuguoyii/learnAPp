import Service from '../apis/Service';

export const getArticleListCall = (payload) => {
  console.log(Service.getArticleList(payload).then(res => res));
  return Service.getArticleList(payload).then(res => res.data);
};
export const getArticleTypeCall = (payload) => {
  console.log(Service.getArticleType(payload).then(res => res));
  return Service.getArticleType(payload).then(res => res.data);
};
export const getBannerCall = (payload) => {
  console.log(Service.getBanner(payload).then(res => res));
  return Service.getBanner(payload).then(res => res.data);
};
