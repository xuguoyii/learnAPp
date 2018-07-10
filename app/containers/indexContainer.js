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
	return {
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);