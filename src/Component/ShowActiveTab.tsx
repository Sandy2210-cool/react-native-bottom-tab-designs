import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { commonStyle } from '../Utils/CommonStyle';
import type { RectangleTabProps } from '../Utils/Interfaces';
import ActiveImage from './ActiveImage';
import SimpleActiveText from './SimpleActiveText';

const ShowActiveTab: React.FC<RectangleTabProps> = ({
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
            key={index}
            style={tabStyle}
            onPress={() => onTabPress(index)}
          >
            {tab.icon && isActive ? (
              <View style={[styles.diamondView, diamondView]}>
                <ActiveImage
                  img={tab.icon}
                  activeIconStyle={activeIconStyle}
                  isActive={isActive}
                  inActiveIconStyle={inActiveIconStyle}
                />
                <View style={{marginLeft:5}}></View>
                <SimpleActiveText
                  activeTabTextStyle={activeTabTextStyle}
                  activeColor={activeColor}
                  title={tab.title}
                  isActive={isActive}
                  inactiveTabTextStyle={inactiveTabTextStyle}
                  inactiveColor={inactiveColor}
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
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  diamondView: {
    paddingHorizontal: 15,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
  },
  inActivediamondView: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  viewImage: {
    alignItems: 'center',
  },
});

export default ShowActiveTab;
