import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

import SearchBar from '../SearchBar/SearchBar';

import icons from '../../img/icons/index';

class LeftMenu extends Component {
  render() {
    const menuIcon = icons['menu'];
    return (
        <TouchableHighlight
          onPress={this.props.func}>
          <Image source={menuIcon} />
        </TouchableHighlight>
    );
  }
}

class SearchBarButton extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.func}>
        <Image
          source={icons['searchFa']}
        />
      </TouchableHighlight>
    );
  }
}

class FilterMenu extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.func}>
        <Image
          source={icons['filter']}
        />
      </TouchableHighlight>
    );
  }
}

class Toolbar extends Component {
  constructor() {
    super();
    this.state = {
      search: false
    };
  }

  leftMenu() {
    console.log('Open Left Menu');
  }

  rightMenu() {
    console.log('Open Right Menu');
  }

  toggleSearchBar = () => {
    console.log('render search bar');
    this.setState({search: !this.state.search});
  }

  renderToolBar() {
    if(this.state.search === false) {
      const name = !this.props.name ? '' : this.props.name;
      return (
        <View style={Styles.toolbarContainer}>
          <LeftMenu func={this.leftMenu}/>
          <SearchBarButton func={this.toggleSearchBar} />
          <Text style={Styles.name}>{name.toUpperCase()}</Text>
          <FilterMenu func={this.rightMenu} />
        </View>
      );
    } else {
      return (
        <View style={Styles.toolbarContainer}>
          <SearchBar toggle={this.toggleSearchBar} />
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        {this.renderToolBar()}
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  toolbarContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: 'rgb(65, 18, 18)'
  },
  menuIcon: {
    height: 25,
    width: 25,
  },
  searchIcon: {
    height: 25,
    width: 25,
    marginLeft: 20
  },
  filterIcon: {
    height: 25,
    width: 25
  },
  name: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    width: 240,
    height: 50
  }
});

export default Toolbar;
