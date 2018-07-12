import Service from '../apis/Service';

export const getArticleListCall = (payload) => {
	console.log(Service.getArticleList(payload).then(res => res))
	return Service.getArticleList(payload).then(res => res.data);
};

