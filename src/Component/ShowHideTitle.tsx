import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { commonStyle } from '../Utils/CommonStyle';
import type { RectangleTabProps } from '../Utils/Interfaces';
import SimpleActiveText from './SimpleActiveText';
import ActiveImage from './ActiveImage';

const ShowHideTitle: React.FC<RectangleTabProps> = ({
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
  title = true,
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
                <ActiveImage
                  img={tab.icon}
                  activeIconStyle={activeIconStyle}
                  isActive={isActive}
                  inActiveIconStyle={inActiveIconStyle}
                />
              </View>
            ) : (
              <View style={styles.inActivediamondView}>
                <ActiveImage
                  img={tab.icon}
                  activeIconStyle={activeIconStyle}
                  isActive={isActive}
                  inActiveIconStyle={inActiveIconStyle}
                />
              </View>
            )}

            {title && isActive && (
              <SimpleActiveText
                activeTabTextStyle={activeTabTextStyle}
                activeColor={activeColor}
                title={tab.title}
                isActive={isActive}
                inactiveTabTextStyle={inactiveTabTextStyle}
                inactiveColor={inactiveColor}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ShowHideTitle;

const styles = StyleSheet.create({
  diamondView: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
  },
  inActivediamondView: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
});
