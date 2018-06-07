import React , {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get("window").height;

class GDText extends Component {

  render() {
    const {
      textStyle,
      children,
      header,
      title,
    } = this.props;

    return (
      <View style = {styles.container}>
        <Text style = {
          [
            styles.title,
            textStyle,
            header && {fontSize: 30},
            title && {fontSize: 48},
          ]
        }
        >
          {children}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  title: {
    color: "#1d1d1d",
    fontSize: 12,
    fontFamily: "Montserrat",
    letterSpacing: 2
  }
})

export default GDText;
