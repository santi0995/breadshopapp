import { FlatList, SafeAreaView } from 'react-native';

import { PRODUCTS } from '../../constants/data/products';
import ProductItem from '../../components/product-item';
import React from 'react';
import { styles } from './styles';

const Product = ({ navigation, route }) => {
  const { categoryId, title } = route.params;

  const filteredProducts = PRODUCTS.filter((product) => product.categoryId === categoryId);

  const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
  const onSelected = (item) => {
    navigation.navigate('ProductDetail', {
      productId: item.id,
      title: item.title,
    });
  };
  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.contentList}
      />
    </SafeAreaView>
  );
};

export default Product;
