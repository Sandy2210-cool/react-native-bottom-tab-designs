import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Color from '../Utils/Color';
import { commonStyle } from '../Utils/CommonStyle';
import ActiveImage from './ActiveImage';
import ActiveText from './ActiveText';
import type { RectangleTabProps } from '../Utils/Interfaces';

const CircularBottom: React.FC<RectangleTabProps> = ({
  tabs,
  activeTab,
  onTabPress,
  activeColor, // Default active color
  inactiveColor, // Default inactive color
  tabStyle,
  activeTabTextStyle,
  inactiveTabTextStyle,
  containerStyle,
  diamondView,
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
            {isActive ? (
              <View style={[styles.diamondView, diamondView]}>
                <View style={styles.diamond}>
                  <ActiveImage
                    img={tab.icon}
                    activeIconStyle={activeIconStyle}
                    isActive={isActive}
                    inActiveIconStyle={inActiveIconStyle}
                  />
                </View>
              </View>
            ) : (
              <ActiveImage
                img={tab.icon}
                activeIconStyle={activeIconStyle}
                isActive={isActive}
                inActiveIconStyle={inActiveIconStyle}
              />
            )}

            <ActiveText
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

export default CircularBottom;

const styles = StyleSheet.create({
  diamond: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Color.primaryColor,
  },
  diamondView: {
    width: 50,
    height: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    top: -35,
    backgroundColor: 'white',
    borderRadius: 25,
  },
});
