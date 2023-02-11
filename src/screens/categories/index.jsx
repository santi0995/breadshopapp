import { FlatList, SafeAreaView, View } from 'react-native';

import {CATEGORIES} from '../../constants/data/index'
import { CategoryItem } from '../../components';
import React from 'react';
import { THEME } from '../../constants/theme';
import { styles } from './styles';

const Categories = ({ navigation }) => {
const onSelected = (item) => {
  navigation.navigate('Products', {
    categoryId: item.id,
    title: item.title,
  })
};
const renderItem=({item}) => <CategoryItem item={item} onSelected={onSelected}/>;
const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.containerList}
      />
    </SafeAreaView>
  );
};

export default Categories;
