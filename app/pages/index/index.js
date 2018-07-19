import React from 'react';
import {
  ScrollView, Text, View, ActivityIndicator
} from 'react-native';
import {
  Tabs, Toast, Card, WhiteSpace, WingBlank
} from 'antd-mobile-rn';
import SplashScreen from 'react-native-splash-screen';


export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleType: [],
      articleList: [],
      firstLoad: true,
    };
  }

  componentWillMount() {
    const { getArticleType } = this.props;
    getArticleType();
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.articleType.data.results) {
      const { getArticleList } = this.props;
      const { firstLoad } = this.state;
      this.setState({
        articleType: nextProps.articleType.data.results.slice(0, 4),
      });
      if (firstLoad) {
        Toast.loading('加载中');
        getArticleList(
          { id: nextProps.articleType.data.results[0].id }
        );
        this.setState({
          firstLoad: false,
        });
      }
    }
    console.warn(nextProps);
    if (nextProps.articleList.data.results) {
      const { articleList } = this.state;
      articleList.push(nextProps.articleList.data.results);
      console.warn(articleList);
      this.setState({
        articleList,
      });
      Toast.hide();
    }
  }

  change =(tab, index) => {
    console.log(tab, index);
    const { id } = tab;
    const { getArticleList } = this.props;
    const { articleList } = this.state;
    if (index + 1 > articleList.length) {
      Toast.loading('加载中');
      getArticleList(
        { id }
      );
    }
  }

  renderContent = (tab, index) => {
    const style = {
      paddingVertical: 40,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      backgroundColor: '#ddd',
    };
    const { articleList } = this.state;
    console.log(articleList);
    const content = articleList[index] ? articleList[index].map(item => (
      <WingBlank key={item.id} size="lg">
        <Card>
          <Card.Header
            title={item.title}
            thumbStyle={{ width: 30, height: 30 }}
            thumb={item.cover}
            extra="this is extra"
          />
          <Card.Body>
            <View style={{ height: 42 }}>
              <Text style={{ marginLeft: 16 }}>
Card Content
              </Text>
            </View>
          </Card.Body>
          <Card.Footer
            content="footer content"
            extra="footer extra content"
          />
        </Card>
        <WhiteSpace size="lg" />
      </WingBlank>

    )) : '';
    return (
      <ScrollView key={tab.id} style={{ backgroundColor: '#fff' }}>
        {articleList.length > 0 ? content : <ActivityIndicator text="正在加载" />}
      </ScrollView>
    );
  };

  render() {
    const { articleType } = this.state;
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
    };
    console.log(articleType);
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2 }}>
          <Tabs tabs={articleType} initialPage={0} tabBarPosition="top" onChange={this.change}>
            {this.renderContent}
          </Tabs>
        </View>
      </View>
    );
  }
}
