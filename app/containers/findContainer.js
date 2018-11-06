import { connect } from 'react-redux';
import Find from '../pages/find/index';


const mapStateToProps = (state) => {
  const { articleList } = state;
  return {
    articleList: articleList || []
  };
};

const mapDispatchToProps = dispatch => ({
  getArticleType: payload => dispatch({
    type: 'GET_RANK_LIST_START',
    payload
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Find);
