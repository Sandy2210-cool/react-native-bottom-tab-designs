import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Color from '../Utils/Color';
import { commonStyle } from '../Utils/CommonStyle';
import type { RectangleTabProps } from '../Utils/Interfaces';
import ActiveImage from './ActiveImage';
import ActiveText from './ActiveText';

const RectangleTab: React.FC<RectangleTabProps> = ({
  tabs,
  activeTab,
  onTabPress,
  activeColor = Color.primaryColor, // Default active color
  inactiveColor = Color.inactiveColor, // Default inactive color
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
            style={[tabStyle]}
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

export default RectangleTab;

const styles = StyleSheet.create({
  diamond: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Color.primaryColor,
  },
  diamondView: {
    width: 45,
    height: 45,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    top: -33,
    backgroundColor: 'white',
    transform: [{ rotate: '315deg' }],
  },
  viewImage: {
    alignItems: 'center',
  },
});
