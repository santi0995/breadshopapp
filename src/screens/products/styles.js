import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
  },
  text: {
    color: THEME.colors.white,
  },
  contentList:{
    flex: 1,
  }
});
