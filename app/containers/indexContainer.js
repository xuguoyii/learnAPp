import React from 'react';
import { connect } from 'react-redux';
import Index from '../pages/index/index';

class IndexContainer extends React.Component {
  render() {
    return (
      <Index {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  const { articleList, articleType } = state;
  return {
    articleList: articleList || [],
    articleType: articleType || []
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
