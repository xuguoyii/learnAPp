import axios from 'axios';
import Apis from './Apis';

export default class Service {
  static getArticleType() {
    return axios.get(Apis.getArticleType);
  }

  static getArticleList(payload) {
    return axios.get(`${Apis.getArticleList}id/${payload.id}/count/${payload.count || 10}/page/${payload.page || 1}`);
  }
}
