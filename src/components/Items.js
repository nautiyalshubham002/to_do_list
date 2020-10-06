import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Items = ({title, desc}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </>
  );
};

export default Items;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    marginTop: 10,
  },
  title: {
    fontSize: 30,
  },
  desc: {
    fontSize: 20,
  },
});
