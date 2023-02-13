import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Lobster-Regular',
    fontSize: 25,
  },
});
