import { Categories, ProductDetail, Products } from '../screens/index';
import { Text, TouchableOpacity, View } from 'react-native';

import { THEME } from '../constants/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.colors.primary,
        },
        headerTintColor: THEME.colors.black,
        navigationBarColor: THEME.colors.primary,
        headerTitleStyle: {
          fontFamily: 'Lobster-Regular',
          fontSize: 20,
          color: THEME.colors.secondary,
        },
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({
          title: route.params.title,
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Text>Click here</Text>
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
