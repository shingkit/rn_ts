import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ToastAndroid,
} from 'react-native';
class TitleBar extends React.Component {
  render() {
    const {title, onPressLeftBtn, onPressRightBtn} = this.props;
    return (
      <View style={styles.TitleBar}>
        <View style={styles.Row}>
          <TouchableOpacity
            onPress={() => {
              onPressLeftBtn();
            }}>
            <Image
              style={styles.LeftBtn}
              source={require('../../res/images/rn.png')}
            />
          </TouchableOpacity>
          <Text style={styles.Title}>{title}</Text>
          <TouchableOpacity
            onPress={() => {
              onPressRightBtn();
            }}>
            <Text style={styles.RightBtn}>添加</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Divider} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  LeftBtn: {
    width: 48,
    height: 48,
  },
  RightBtn: {
    width: 48,
    height: 48,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  Bg: {
    backgroundColor: 0x000,
  },
  Title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 0xfff,
    textAlign: 'center',
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  Divider: {
    height: 1,
    backgroundColor: 0x999,
  },
});
export default TitleBar;
