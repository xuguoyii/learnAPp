import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import { Button } from 'antd-mobile-rn';

export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			article: {}
		}
	}

	componentWillMount() {

	}

	componentWillReceiveProps(nextProps) {

	}


	// 渲染富文本
	renderArticle() {
		const { article } = this.state;
		return {
			__html: article.content
		}
	}

	render() {
		return (
                    <Button type="primary">Primary</Button>
		);
	}
}