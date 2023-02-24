import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { THEME } from '../../constants/theme';
import { addToCart } from '../../store/actions/index';
import { styles } from './styles';

const ProductDetail = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{product?.title}</Text>
      <Text style={styles.text}>{product?.description}</Text>
      <Text style={styles.text}>{product?.weight}</Text>
      <Text style={styles.text}>${product?.price}</Text>
      <Button title="Add to cart" onPress={onAddToCart} color={THEME.colors.black} />
    </View>
  );
};

export default ProductDetail;
