import { connect } from 'react-redux';
import Index from '../pages/index/index';


const mapStateToProps = (state) => {
  const { articleList, articleType, bannerData } = state;
  return {
    articleList: articleList || [],
    articleType: articleType || [],
    bannerData: bannerData || [],
  };
};

const mapDispatchToProps = dispatch => ({
  getArticleType: payload => dispatch({
    type: 'GET_ARTICLE_TYPE_START',
    payload
  }),
  getArticleList: payload => dispatch({
    type: 'GET_ARTICLE_LIST_START',
    payload
  }),
  getBanner: payload => dispatch({
    type: 'GET_BANNER_START',
    payload
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
