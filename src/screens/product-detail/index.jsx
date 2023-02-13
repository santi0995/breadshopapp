import { Text, View } from 'react-native';

import {PRODUCTS} from '../../constants/data/products';
import React from 'react';
import { styles } from './styles';

const ProductDetail = ({navigation, route}) => {
  const {productId, title} = route.params;

  const product = PRODUCTS.find((product)=> product.id === productId);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{product.title}</Text>
      <Text style={styles.text}>{product.description}</Text>
      <Text style={styles.text}>{product.weight}</Text>
      <Text style={styles.text}>${product.price}</Text>
    </View>
  );
};

export default ProductDetail;
