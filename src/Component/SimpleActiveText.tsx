import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import type { SimpleActiveTextProps } from '../Utils/Interfaces';

// Define the interface for the component props

const SimpleActiveText: React.FC<SimpleActiveTextProps> = ({
  activeColor,
  activeTabTextStyle,
  title,
  isActive,
  inactiveTabTextStyle,
  inactiveColor,
}) => {
  const textStyle = [
    styles.tabText, // Base style
    isActive ? styles.activeTabText : null, // Active style
    { color: isActive ? activeColor : inactiveColor }, // Color based on active state
    isActive ? activeTabTextStyle : inactiveTabTextStyle, // Additional styles based on active state
  ].filter(Boolean); // Remove any null values

  return (
    <View>
      <Text style={textStyle}>{title}</Text>
    </View>
  );
};

export default SimpleActiveText;

const styles = StyleSheet.create({
  activeTabText: { fontSize: 16 },
  tabText: {
    fontSize: 14,
  },
});
