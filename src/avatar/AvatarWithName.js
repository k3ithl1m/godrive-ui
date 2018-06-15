import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';
import {GDText} from '../text';

class AvatarWithName extends Component {
  render() {
    const {
      image,
      name
    } = this.props;

    return (
      <TouchableOpacity style = {styles.container}>
        <Avatar
          size = "small"
          rounded
          source= {image}
        />
        <GDText textStyle = {{fontSize: 10, margin :3, color: "#959595"}} >{name}</GDText>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin : 5,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default AvatarWithName;
