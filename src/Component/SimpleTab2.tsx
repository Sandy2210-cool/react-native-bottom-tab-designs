import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { commonStyle } from '../Utils/CommonStyle';
import SimpleActiveText from './SimpleActiveText';
import type { RectangleTabProps } from '../Utils/Interfaces';
import ActiveImage from './ActiveImage';



const SimpleTab2: React.FC<RectangleTabProps> = ({
  tabs,
  activeTab,
  onTabPress,

  activeColor, // Default active color
  inactiveColor, // Default inactive color
  tabStyle,
  activeTabTextStyle,
  inactiveTabTextStyle,
  containerStyle,
  activeIconStyle,
  inActiveIconStyle,
}) => {
  return (
    <View style={[commonStyle.container, containerStyle]}>
      {tabs.map((tab, index) => {
        const isActive = index === activeTab;
        return (
          <TouchableOpacity
            style={tabStyle}
            key={index}
            onPress={() => onTabPress(index)}
          >
            <ActiveImage
              img={tab.icon}
              isActive={isActive}
              activeIconStyle={activeIconStyle}
              inActiveIconStyle={inActiveIconStyle}
            />
            <SimpleActiveText
              title={tab.title}
              isActive={isActive}
              activeColor={activeColor}
              inactiveColor={inactiveColor}
              activeTabTextStyle={activeTabTextStyle}
              inactiveTabTextStyle={inactiveTabTextStyle}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};



export default SimpleTab2;
