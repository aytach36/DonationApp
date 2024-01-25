import React from 'react';
import {SafeAreaView} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';

import {useSelector} from 'react-redux';
import Header from '../../components/Header/Header';

const Home = () => {
  const user = useSelector(state => state.user);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={user.firstName + ' ' + user.lastName} />
    </SafeAreaView>
  );
};

export default Home;
