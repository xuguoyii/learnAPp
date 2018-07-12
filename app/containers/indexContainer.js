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

const mapStateToProps = (state, ownProps) => {
	const { articleList } = state;
	return {
		articleList: articleList || []
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getArticleList: (payload) => {
			return dispatch({
				type: 'GET_ARTICLE_LIST_START',
				payload: payload
			});
		},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);