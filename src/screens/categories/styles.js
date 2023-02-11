import { StatusBar, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
    marginTop: StatusBar.currentHeight,
  },
  text:{
    color: THEME.colors.white
  },
  containerList:{
    flex:1,
    paddingBottom: 60,
  }
});
