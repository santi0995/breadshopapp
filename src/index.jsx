import { ActivityIndicator, View } from 'react-native';

import AppNavigator from './navigation';
import { styles } from './styles';
import {theme} from './constants/theme'
import { useFonts } from 'expo-font';

const App = () => {
  const [loaded] = useFonts({
    'Lobster-Regular': require('../assets/fonts/Lobster-Regular.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return <AppNavigator />;
};

export default App;
