import axios from 'axios';
import Apis from './Apis';

export default class Service {
  static getArticleType() {
    return axios.get(Apis.getArticleType);
  }

  /**
     *
     * @param payload
     * @returns {AxiosPromise<any>}
  */
  static getArticleList(payload) {
    return axios.get(`${Apis.getArticleList}id/${payload.id}/count/${payload.count || 10}/page/${payload.page || 1}`);
  }

  static getBanner() {
    return axios.get(Apis.getIndexData);
  }

  static getRank() {
    return axios.get(Apis.getRank);
  }
}
