import { Text, TextInput, View } from 'react-native';

import Label from '../label';
import { THEME } from '../../constants/theme';
import { styles } from './styles';

const Input = ({
  editable,
  children,
  value,
  style,
  onChangeText,
  onFocus,
  onBlur,
  maxLenght,
  placeholder,
  placeholderTextColor = THEME.colors.gray,
  keyboardType,
  hasError,
  error,
  touched,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Label {...props}>
        <TextInput
          {...props}
          editable={editable}
          value={value}
          style={{ ...styles.input, ...style }}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLenght}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
        />
      </Label>
      {hasError && touched && (
        <View style={styles.message}>
          <Text style={styles.helperText}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;
