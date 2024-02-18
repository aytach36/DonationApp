import React, {useState} from 'react';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';

const Input = props => {
  const [value, setValue] = useState('');

  return (
    <View>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder ? props.placeholder : null}
        style={style.input}
        value={value}
        onChangeText={val => {
          setValue(val);
          props.onChangeText(value);
        }}
        keyboardType={props.keyboardType}
      />
    </View>
  );
};

Input.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  secureTextEntry: false,
};

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export default Input;
