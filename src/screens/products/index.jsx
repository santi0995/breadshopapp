import { Button, Text, View } from 'react-native';

import React from 'react';
import { THEME } from '../../constants/theme';
import { styles } from './styles';

const Product = ({navigation, route}) => {

const {categoryId, title} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Products</Text>
      <Button title="Go to Product detail" onPress={() => navigation.navigate('ProductDetail')} color={THEME.colors.primary}/>
    </View>
  );
};

export default Product;
