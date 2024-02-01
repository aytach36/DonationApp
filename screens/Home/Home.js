import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  console.log(categories);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntrotext}>Hello, </Text>

            <View style={style.username}>
              <Header title={user.firstName + ' ' + user.lastName[0] + '.👋'} />
            </View>
          </View>
          <Image
            source={{uri: user.profileImage}}
            style={style.profileImage}
            resizeMode={'contain'}
          />
        </View>
        <View style={style.searchBox}>
          <Search />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode={'contain'}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
