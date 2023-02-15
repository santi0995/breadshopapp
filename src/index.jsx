import { ActivityIndicator, View } from 'react-native';

import AppNavigator from './navigation';
import { Provider } from 'react-redux';
import { THEME } from './constants/theme';
import store from './store';
import { styles } from './styles';
import { useFonts } from 'expo-font';

const App = () => {
  const [loaded] = useFonts({
    'Lobster-Regular': require('../assets/fonts/Lobster-Regular.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={THEME.colors.primary} />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
