import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import CharacterSelect from '../../components/CharacterSelect/CharacterSelect';

export default class Header extends React.Component {
  render() {
    console.log(this.props)
    return (
      <View>
        <Text>Data Provided by rbnorway</Text>
      </View>
    )
  }
}
