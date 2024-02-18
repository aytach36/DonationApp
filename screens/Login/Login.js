import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  console.log(email);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <Input
          label={'Email'}
          placeholder={'Enter your Email...'}
          onChangeText={value => setEmail(value)}
          keyboardType={'email-address'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
