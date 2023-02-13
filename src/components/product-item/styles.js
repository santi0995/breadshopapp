import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/theme/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    height: 110,
    backgroundColor: THEME.colors.primary,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'Lobster-Regular',
    fontSize: 18,
    color: THEME.colors.secondary,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: THEME.colors.white,
  },
  price: {
    fontFamily: 'Lobster-Regular',
    fontWeight: 'bold',
    fontSize: 16,
    color: THEME.colors.white,
  },
  weight: {
    fontFamily: 'Lobster-Regular',
    fontSize: 14,
    color: THEME.colors.white,
  },
});
