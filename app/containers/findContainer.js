import React from 'react';
import { connect } from 'react-redux';
import Find from '../pages/find/index';

class FindContainer extends React.Component {
  render() {
    return (
      <Find />
    );
  }
}

const mapStateToProps = (state) => {
  const { articleList } = state;
  return {
    articleList: articleList || []
  };
};

const mapDispatchToProps = dispatch => ({
  getArticleType: payload => dispatch({
    type: 'GET_ARTICLE_LIST_START',
    payload
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Find);
