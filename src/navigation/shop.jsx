import { Categories, ProductDetail, Products } from '../screens/index';
import { Text, TouchableOpacity, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../constants/theme';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerTintColor: theme.colors.primary,
        navigationBarColor: theme.colors.primary,
        headerTitleStyle: {
          fontFamily: 'Lobster-Regular',
          fontSize: 18,
          color: theme.colors.secondary,
        },
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
          title: 'Categories',
        }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          title: 'Products',
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Text>Click here</Text>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          title: 'Product Detail',
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
