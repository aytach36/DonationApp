import React from 'react';
import style from './style';

import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import {useSelector} from 'react-redux';
import Button from '../../components/Button/Button';
import {CardForm, StripeProvider} from '@stripe/stripe-react-native';

const Payment = () => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const publishableKey = useSelector(state => state.donations.publishableKey);
  console.log(publishableKey);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={style.paymentContainer}>
        <Header title={'Making Donation'} />
        <Text style={style.donationAmountDescription}>
          You are about to donate {donationItemInformation.price}
        </Text>
        <View>
          <StripeProvider publishableKey={publishableKey}>
            <CardForm style={style.cardForm} />
          </StripeProvider>
        </View>
        <View />
      </ScrollView>
      <View style={style.buttonContainer}>
        <Button title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
