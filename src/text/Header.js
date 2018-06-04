import React , {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get("window").height;

class Title extends Component {

  render() {
    const {
      title
    } = this.props;
    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>{title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  title: {
    color: "#1d1d1d",
    fontSize: 30,
    fontFamily: "Montserrat",
    letterSpacing: 2
  }
})

export default Title;
