import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import { Button } from 'antd-mobile-rn';
  import SplashScreen from 'react-native-splash-screen'

export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			article: {}
		}
	}

	componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
		SplashScreen.hide();
	}

	componentWillMount() {
		this.props.getArticleList();
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
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