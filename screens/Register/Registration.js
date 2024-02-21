import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import {Routes} from '../../navigation/Routes';
import BackButton from '../../components/BackButton/BackButton';

const Registration = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Hello and Welcome'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label={'First & Last name'}
            placeholder={'Enter your fullname...'}
            onChangeText={value => setFullName(value)}
            keyboardType={'email-address'}
            xzxzz
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label={'Email'}
            placeholder={'Enter your Email...'}
            onChangeText={value => setEmail(value)}
            keyboardType={'email-address'}
            xzxzz
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label={'Password'}
            placeholder={'******'}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Button title={'Register'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
