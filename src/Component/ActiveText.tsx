import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import type { SimpleActiveTextProps } from '../Utils/Interfaces';



const ActiveText: React.FC<SimpleActiveTextProps> = ({
  activeColor,
  activeTabTextStyle,
  title,
  isActive,
  inactiveTabTextStyle,
  inactiveColor,
}) => {
  return (
    <View>
      <Text
        style={[
          isActive ? styles.activeTabText : styles.tabText,
          { color: isActive ? activeColor : inactiveColor },
          isActive ? activeTabTextStyle : inactiveTabTextStyle,
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

export default ActiveText;

const styles = StyleSheet.create({
  activeTabText: { fontSize: 16, top: 25, marginLeft: 5 },
  tabText: {
    fontSize: 14,
    top: 2,
    marginLeft: 5,
  },
});
