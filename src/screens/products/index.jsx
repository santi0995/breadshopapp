import { Button, Text, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const Product = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <Button title="Go to Product detail" onPress={() => navigation.navigate('ProductDetail')} color="#000"/>
    </View>
  );
};

export default Product;
