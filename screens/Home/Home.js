import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Badge from '../../components/Badge/Badge';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Tab from '../../components/Tab/Tab';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Azzahri A.'} type={1} />
      {/* <Button
        title={'Donate'}
        onPress={() => {
          console.log('You just pressed me');
        }}
      /> */}
      <Tab title={'Highlight'} />
      <Tab title={'Highlight'} isInactive={true} />
      <Badge title={'Environment'} />
    </SafeAreaView>
  );
};

export default Home;
