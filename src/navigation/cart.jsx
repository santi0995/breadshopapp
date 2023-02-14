import { Cart } from '../screens';
import { THEME } from '../constants/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
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
      }}>
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
