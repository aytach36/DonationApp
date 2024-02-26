import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';
import {scaleFontSize, verticalScale} from '../../assets/styles/scaling';
const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  registrationButton: {
    alignItems: 'center',
  },
  error: {
    fontFamily: getFontFamily('Inter', ''),
    fontSize: scaleFontSize(16),
    color: '#FF0000',
    marginBottom: verticalScale(24),
  },
});

export default style;
