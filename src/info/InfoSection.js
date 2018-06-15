import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {GDText} from '../text';

const SCREEN_WIDTH = Dimensions.get("window").width;

class InfoSection extends Component {

  render() {
    const {
      title,
      children,
      styles,
      right
    } = this.props;

    return (
      <View style = {[infoStyles.container, styles, right && infoStyles.right]}>
        <GDText textStyle = {{fontSize: 10, marginBottom: 5}}>{title}</GDText>
        <GDText textStyle = {{fontSize: 16}}>{children}</GDText>
      </View>
    )
  }
}

const infoStyles = StyleSheet.create({
  container: {
    margin: 15,
    width: SCREEN_WIDTH / 2.7,
    flexWrap: "wrap"
  },
  right: {
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }
})

export default InfoSection;
