import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  Dimensions
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get("window").width;

class Card extends Component {
  render() {
    const {
      TouchableComponent,
      containerStyle,
      onPress,
      cardStyle,
      title,
      titleProps,
      titleStyle,
      icon,
    }
  }
}
