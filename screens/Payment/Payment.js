import React, {useState} from 'react';
import style from './style';

import {SafeAreaView, ScrollView, View, Text, Alert} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import {useSelector} from 'react-redux';
import Button from '../../components/Button/Button';
import {
  CardForm,
  PaymentMethod,
  StripeProvider,
  useConfirmPayment,
} from '@stripe/stripe-react-native';

const Payment = () => {
  const [isReady, setIsReady] = useState(false);
  const {confirmPayment, loading} = useConfirmPayment();
  const user = useSelector(state => state.user);
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const publishableKey = useSelector(state => state.donations.publishableKey);
  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch('http://10.0.2.2:4242/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        currency: 'usd',
        amount: donationItemInformation.price * 100,
      }),
    });
    const {clientSecret} = await response.json();
    return clientSecret;
  };

  const handlePayment = async () => {
    const clientSecret = await fetchPaymentIntentClientSecret();
    const {error, paymentIntent} = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card',
    });
    if (error) {
      Alert.alert(
        'Error has occured with your payment ',
        error.localizedMessage,
      );
    } else if (paymentIntent) {
      Alert.alert('Succesful', 'The payment was confirmed successfully');
    }
  };
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={style.paymentContainer}>
        <Header title={'Making Donation'} />
        <Text style={style.donationAmountDescription}>
          You are about to donate {donationItemInformation.price}
        </Text>
        <View>
          <StripeProvider publishableKey={publishableKey}>
            <CardForm
              style={style.cardForm}
              onFormComplete={() => {
                setIsReady(true);
              }}
            />
          </StripeProvider>
        </View>
        <View />
      </ScrollView>
      <View style={style.buttonContainer}>
        <Button
          title={'Donate'}
          isDisabled={!isReady || loading}
          onPress={async () => await handlePayment()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
