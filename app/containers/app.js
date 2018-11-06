import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import IndexContainer from './indexContainer';
import FindContainer from './findContainer';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }

  render() {
    const { selectedTab } = this.state;
    return (
      <TabNavigator tabBarStyle={{ backgroundColor: 'white' }} style={{ backgroundColor: 'white', marginTop: 20 }}>
        <TabNavigator.Item
          title="推荐"
          selected={selectedTab === 'home'}
          renderIcon={() => <Icon name="ios-home" size={30} color="gray" />}
          renderSelectedIcon={() => <Icon name="ios-home" size={30} color="#4E78E7" />}
          onPress={() => this.setState({ selectedTab: 'home' })}
        >
          <IndexContainer />
        </TabNavigator.Item>
        <TabNavigator.Item
          title="排行榜"
          selected={selectedTab === 'rank'}
          renderIcon={() => <Icon name="ios-podium" size={30} color="gray" />}
          renderSelectedIcon={() => <Icon name="ios-podium" size={30} color="#4E78E7" />}
          onPress={() => this.setState({ selectedTab: 'rank' })}
        >
          <FindContainer />
        </TabNavigator.Item>
        <TabNavigator.Item
          title="搜索"
          selected={selectedTab === 'search'}
          renderIcon={() => <Icon name="ios-search" size={30} color="gray" />}
          renderSelectedIcon={() => <Icon name="ios-search" size={30} color="#4E78E7" />}
          onPress={() => this.setState({ selectedTab: 'search' })}
        >
          <FindContainer />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
