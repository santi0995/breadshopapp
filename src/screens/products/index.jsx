import { Button, Text, View } from 'react-native';

import React from 'react';
import { styles } from './styles';
import { theme } from '../../constants/theme';

const Product = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Products</Text>
      <Button title="Go to Product detail" onPress={() => navigation.navigate('ProductDetail')} color={theme.colors.primary}/>
    </View>
  );
};

export default Product;
