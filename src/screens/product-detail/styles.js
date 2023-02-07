import { StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Lobster-Regular',
    fontSize: 30,
  },
});
