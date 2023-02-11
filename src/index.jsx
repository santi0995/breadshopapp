import { ActivityIndicator, View } from 'react-native';

import AppNavigator from './navigation';
import {THEME} from './constants/theme'
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

  return <AppNavigator />;
};

export default App;
