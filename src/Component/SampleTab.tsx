import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import type { RectangleTabProps } from '../Utils/Interfaces';
import { commonStyle } from '../Utils/CommonStyle';
import SimpleActiveText from './SimpleActiveText';


const SimpleTab: React.FC<RectangleTabProps> = ({
  tabs,
  activeTab,
  onTabPress,
  activeColor , // Default active color
  inactiveColor, // Default inactive color
  tabStyle,
  activeTabTextStyle,
  inactiveTabTextStyle,
  containerStyle,
}) => {
  return (
    <View style={[commonStyle.container, containerStyle]}>
      {tabs.map((tab, index) => {
        const isActive = index === activeTab;
        return (
          <TouchableOpacity style={[tabStyle]} key={index} onPress={() => onTabPress(index)}>
             <SimpleActiveText
                  activeTabTextStyle={activeTabTextStyle}
                  activeColor={activeColor}
                  title={tab.title}
                  isActive={isActive}
                  inactiveTabTextStyle={inactiveTabTextStyle}
                  inactiveColor={inactiveColor}
                />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};



export default SimpleTab;
