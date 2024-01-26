import React from 'react';
import {SafeAreaView, Pressable, Text} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';

import {useSelector, useDispatch} from 'react-redux';
import Header from '../../components/Header/Header';
import {updateFirstName} from '../../redux/reducers/User';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={user.firstName + ' ' + user.lastName} />
      <Pressable
        onPress={() => dispatch(updateFirstName({firstName: 'Aitats'}))}>
        <Text>Press me to change first name</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
