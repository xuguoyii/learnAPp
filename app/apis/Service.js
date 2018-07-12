import axios from 'axios';
import Apis from './Apis';
import Config from './Config';

export default class Service {

	static getArticleList(payload) {
		console.log(Apis.getArticleList)
		return axios.get(Apis.getArticleList)
	}
}
