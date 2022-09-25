import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {name, age} = this.props;
    return (
      <View style={styles.Container}>
        <Text style={styles.Title}>{name}</Text>
        <Text style={styles.SubTitle}>{age}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    padding: 8,
  },
  Title: {
    fontSize: 24,
    color: '#000',
  },
  SubTitle: {
    fontSize: 18,
    color: '#999',
  },
});
export default TodoItem;
