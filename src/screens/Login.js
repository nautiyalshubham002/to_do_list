import React, {useState} from 'react';
import {TextInput, Alert, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {setIsLogin} from '../store/slices/LoginSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert('please fill all details');
      dispatch(setIsLogin(true));
    }
  };

  return (
    <>
      <TextInput placeholder="admin" />
      <TextInput
        secureTextEntry={true}
        onChangeText={(text) => {
          setUsername(text);
        }}
        placeholder="12345"
      />
      <Button
        title="login"
        onChangeText={(text) => {
          setPassword(text);
        }}
        onPress={handleLogin}
      />
    </>
  );
};

export default Login;
