import { Text, View } from 'react-native';

import React from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';

const ProductDetail = ({ navigation }) => {
  const product = useSelector((state) => state.products.selected);

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
