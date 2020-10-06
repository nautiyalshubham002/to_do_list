import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Items from '../components/Items';
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Adding from '../components/Adding';
import {setAdd} from '../store/slices/ListSlice';
var i = 0;
const Home = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.ListReducer.list);
  const showAdd = useSelector((state) => state.ListReducer.add);

  const handleAdd = () => {
    console.log('handling add');
    dispatch(setAdd(true));
  };
  return (
    <View style={styles.view}>
      <Text style={styles.head}>TO DO LIST</Text>
      <ScrollView>
        {lists.map(({title, desc}) => {
          return <Items key={i++} title={title} desc={desc} />;
        })}
      </ScrollView>
      {showAdd ? <Adding /> : <></>}
      <TouchableOpacity
        activeOpacity="0.5"
        onPress={handleAdd}
        style={styles.addBtn}>
        <Icon name="pluscircle" size={50} />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  head: {
    fontSize: 30,
    textAlign: 'center',
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
