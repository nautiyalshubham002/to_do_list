import React from 'react';
import {View, Button, StyleSheet, Alert, TextInput} from 'react-native';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addItem, setAdd} from '../store/slices/ListSlice';

const Adding = () => {
  const dispatch = useDispatch();

  const [titlee, setTitlee] = useState('');
  const [description, setDescription] = useState('');

  const addItemtoList = () => {
    const obj = {
      title: titlee,
      desc: description,
    };
    setTitlee('');
    setDescription('');
    if (titlee === '' || description === '') {
      Alert('please fill details');
    } else {
      dispatch(addItem(obj));
    }
    dispatch(setAdd(false));
  };

  return (
    <>
      <View style={styles.adding}>
        <TextInput
          style={styles.input}
          placeholder="title"
          value={titlee}
          onChangeText={(text) => setTitlee(text)}
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => setDescription(text)}
          value={description}
          placeholder="description"
        />
        <Button title="add" onPress={addItemtoList} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  head: {
    fontSize: 30,
    textAlign: 'center',
  },
  input: {
    height: 'auto',
    fontSize: 25,
  },
  addBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 15,
    bottom: 20,
    borderRadius: 30,
    height: 60,
    width: 60,
  },
  view: {
    flex: 1,
  },
  adding: {
    zIndex: 2,
    width: 300,
    backgroundColor: 'lightblue',
    marginTop: 100,
    marginLeft: 50,
    position: 'absolute',
  },
});

export default Adding;
