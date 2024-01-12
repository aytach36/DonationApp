import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';

import Header from '../../components/Header/Header';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Azzahri A.'} type={1} />
      <Header title={'Azzahri A.'} type={2} />
      <Header title={'Azzahri A.'} type={3} />
    </SafeAreaView>
  );
};

export default Home;
