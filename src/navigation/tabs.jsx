import CartNavigator from './cart';
import IonicIcons from '@expo/vector-icons/Ionicons';
import OrdersNavigator from './orders';
import ShopNavigator from './shop';
import { THEME } from '../constants/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  const cart = useSelector((state) => state.cart.items);
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Lobster-Regular',
          fontSize: 12,
        },
        tabBarActiveTintColor: THEME.colors.primary,
        tabBarInactiveTintColor: THEME.colors.secondary,
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: 'Shop',
          tabBarIcon: ({ focused }) => (
            <IonicIcons
              name={focused ? 'home' : 'home-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          title: 'Orders',
          tabBarIcon: ({ focused }) => (
            <IonicIcons
              name={focused ? 'file-tray' : 'file-tray-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => (
            <IonicIcons
              name={focused ? 'cart' : 'cart-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
          tabBarBadge: cart.length,
          tabBarBadgeStyle: {
            backgroundColor: THEME.colors.error,
            color: THEME.colors.white,
            fontFamily: 'Lobster-Regular',
            fontSize: 16,
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
