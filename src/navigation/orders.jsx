import { Orders } from '../screens';
import { THEME } from '../constants/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
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
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
