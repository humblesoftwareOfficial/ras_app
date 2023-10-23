import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
export default function DefaultInput({
  value,
  onValueChange,
  placeholder,
  isPassword = false,
  onFocus,
  onBlur,
  borderColor = "#C5C5C5",
  autoCompleteType = "off",
  hasError = false,
  editable = true,
  isInModalBottom = false,
  keyboardType = "default",
  multiLine = false,
  numberOfLines = 3,
  isForPricing = false,
  autoFocus = false,
  withPrefix = false,
  prefix = "",
  maxLength = 250,
  topPrefix = 19,
  customTextAlign = "center",
  backgroundColor = "#FFF",
}) {
  const [showPassword, setShowPassword] = useState(false);

  const onShowHidePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: hasError ? "red" : borderColor,
            borderWidth: hasError ? 1 : 0.9,
            color: editable ? "#000" : "gray",
            backgroundColor,
          },
          { paddingRight: isPassword ? 40 : 15 },
          { height: multiLine ? 90 : 40 },
          { textAlign: multiLine ? "left" : customTextAlign },
        ]}
        onChangeText={onValueChange}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#4D4D4D"
        secureTextEntry={isPassword && !showPassword}
        onFocus={onFocus || null}
        onBlur={onBlur || null}
        editable={editable}
        keyboardType={keyboardType}
        // multiline={multiLine}
        numberOfLines={numberOfLines}
        autoFocus={autoFocus}
        maxLength={maxLength}
        returnKeyType="done"
      />
      {isPassword && !isInModalBottom ? (
        <TouchableOpacity
          style={styles.iconPassword}
          onPress={onShowHidePassword}
        >
          <View>
            {showPassword ? (
              <Feather name="eye-off" size={20} color="#C5C5C5" />
            ) : (
              <Feather
                name="eye"
                size={20}
                color="#F67C23"
              />
            )}
          </View>
        </TouchableOpacity>
      ) : null}
      {isPassword && isInModalBottom ? (
        <View style={styles.iconPassword}></View>
      ) : null}
      {withPrefix && (
        <View
          style={[
            styles.prefix,
            {
              top: topPrefix,
            },
          ]}
        >
          {prefix}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    // borderWidth: 0.9,
    padding: 10,
    borderRadius: 5,
  },
  iconPassword: {
    position: "absolute",
    right: 25,
    top: 22,
  },
  prefix: {
    position: "absolute",
    left: 15,
  },
});
