/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  Button,
  FlatList,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import TitleBar from './src/component/TitleBar';
import TodoItem from './src/component/TodoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: 'shingkit',
          age: 18,
        },
        {
          name: 'big dragon',
          age: 18,
        },
        {
          name: 'liwei',
          age: 18,
        },
        {
          name: 'yuanmin',
          age: 18,
        },
      ],
      modalVisible: false,
      editValue: '',
    };
  }
  onPressLeft = () => {
    ToastAndroid.show('ToastAndroid', ToastAndroid.SHORT);
    console.log('ToastAndroid');
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };
  onPressRight = () => {
    let list = this.state.list;
    list.push({
      name: 'new',
      age: 213,
      id: 'new'.hashCode(),
    });
    this.setState({
      list: list,
    });
  };
  onChangeText(text) {
    this.setState({
      editValue: text,
    });
  }

  onPressAdd = () => {
    let list = this.state.list;
    let text = this.state.editValue;
    list.push({
      name: text,
      age: 213,
    });
    this.setState({
      list: list,
    });
  };
  renderItem({item, index, seprarators}) {
    return <TodoItem name={item.name} age={item.age + index} />;
  }
  divider() {
    return <View style={{height: 1, backgroundColor: 0xfff}} />;
  }
  render() {
    const list = this.state.list;
    return (
      <View style={styles.MatchParent}>
        <TitleBar
          title="hello world"
          onPressLeftBtn={this.onPressLeft}
          onPressRightBtn={this.onPressRight}
        />
        <View style={styles.MatchParent}>
          <FlatList
            style={styles.Bg}
            data={list}
            renderItem={this.renderItem}
            keyExtractor={item => item.name}
            ItemSeparatorComponent={this.divider}
          />
          <View style={styles.Bottom}>
            <TextInput
              style={styles.MatchParent}
              onChangeText={text => this.onChangeText(text)}
            />
            <Button title="添加" style={styles.Add} onPress={this.onPressAdd} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Bg: {
    backgroundColor: '#abc',
    // height: 300,
    flex: 1,
  },
  MatchParent: {
    flex: 1,
  },
  Bottom: {
    height: 50,
    flexDirection: 'row',
  },
  Add: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default App;
