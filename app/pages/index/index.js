import React from 'react';
import {
  ScrollView, Text, View, ActivityIndicator, Image, StyleSheet
} from 'react-native';
import {
  Tabs, Toast, Card, WhiteSpace, WingBlank, Carousel,
} from 'antd-mobile-rn';
import SplashScreen from 'react-native-splash-screen';

const Dimensions = require('Dimensions');

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleType: [],
      articleList: [],
      firstLoad: true,
      bannerData: [],
      radioList: [],
    };
  }

  componentWillMount() {
    const { getBanner } = this.props;
    getBanner();
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.bannerData.data.data) {
      this.setState({
        bannerData: nextProps.bannerData.data.data.slider,
        radioList: nextProps.bannerData.data.data.radioList
      });
    }
    // if (nextProps.articleType.data.results) {
    //   const { getArticleList } = this.props;
    //   const { firstLoad } = this.state;
    //   this.setState({
    //     articleType: nextProps.articleType.data.results.slice(0, 4),
    //   });
    //   if (firstLoad) {
    //     Toast.loading('加载中');
    //     getArticleList(
    //       { id: nextProps.articleType.data.results[0].id }
    //     );
    //     this.setState({
    //       firstLoad: false,
    //     });
    //   }
    // }
    // console.warn(nextProps);
    // if (nextProps.articleList.data.results) {
    //   const { articleList } = this.state;
    //   articleList.push(nextProps.articleList.data.results);
    //   console.warn(articleList);
    //   this.setState({
    //     articleList,
    //   });
    //   Toast.hide();
    // }
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
    // const style = {
    //   paddingVertical: 40,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   margin: 10,
    //   backgroundColor: '#ddd',
    // };
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
    const styles = StyleSheet.create({
      wrapper: {
      },
      radioContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
      },
      slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
      },
      img: {
        width: '100%',
        height: 150,
        backgroundColor: 'rgba(0,0,0,0)',
        resizeMode: 'cover'
      },
      radioItem: {
        width: '48%'
      },
      radioImg: {
        width: '100%',
        height: Dimensions.get('window').width * 0.48,
      }
    });
    const { bannerData, radioList } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 150 }}>
          <Carousel>
            {bannerData.map(item => (
              <Image
                style={styles.img}
                source={{ uri: item.picUrl }}
                key={item.id}
                resizeMode="contain"
              />
            ))}
          </Carousel>
        </View>
        <WingBlank size="sm">
          <Text style={{ fontSize: 16, height: 30, lineHeight: 30 }}>
                  电台
          </Text>
          <View style={styles.radioContent}>
            {radioList.map(item => (
              <View key={item.radioid} style={styles.radioItem}>
                <Image
                  style={styles.radioImg}
                  source={{ uri: item.picUrl }}
                  resizeMode="contain"
                />
                <Text style={{
                  fontSize: 14, backgroundColor: '#fff', paddingTop: 5, paddingBottom: 10, height: 30,
                }}
                >
                  {item.Ftitle}
                </Text>
              </View>
            ))}
          </View>
        </WingBlank>
      </View>
    );
  }
}
