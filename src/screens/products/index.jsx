import { FlatList, SafeAreaView } from 'react-native';
import React, {useEffect} from 'react';
import { filterProducts, selectProduct } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

import ProductItem from '../../components/product-item';
import { styles } from './styles';

const Product = ({ navigation }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.selected);
  const filteredProducts = useSelector((state) => state.products.filteredProducts);

  const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
  const onSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate('ProductDetail', {
      title: item.title,
    });
  };
  const keyExtractor = (item) => item.id.toString();
  useEffect(() => {
    dispatch(filterProducts(category.id));
  }, []);
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
