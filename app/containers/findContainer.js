import React from 'react';
import { connect } from 'react-redux';
import Find from '../pages/find/index';

class FindContainer extends React.Component {
	render() {
		return (
			<Find {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Find);