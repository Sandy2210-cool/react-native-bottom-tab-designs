import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  TouchableOpacity,
  View,
} from 'react-native';
import { commonStyle } from '../Utils/CommonStyle';
import type { RectangleTabProps } from '../Utils/Interfaces';
import ActiveImage from './ActiveImage';

const SimpleTab3: React.FC<RectangleTabProps> = ({
  tabs,
  activeTab,
  onTabPress,
  activeScale = 1.2, // Default scale if not provided
  activeColor = 'blue', // Default active color if not provided
  inactiveColor = 'gray', // Default inactive color if not provided
  tabStyle,
  activeTabTextStyle,
  inactiveTabTextStyle,
  containerStyle,
  activeIconStyle,
  inActiveIconStyle,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current; // Animation value for scaling active tab
  const colorAnim = useRef(new Animated.Value(activeTab)).current; // Initialize with the current active tab

  useEffect(() => {
    // Animate scale and color when active tab changes
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: activeScale,
        friction: 4,
        useNativeDriver: true,
      }),
      Animated.timing(colorAnim, {
        toValue: activeTab, // toValue is the activeTab index
        duration: 700,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
    ]).start(() => {
      Animated.spring(scaleAnim, {
        toValue: 1, // Reset the scale back to 1
        friction: 4,
        useNativeDriver: true,
      }).start();
    });
  }, [activeTab, scaleAnim]);

  return (
    <View style={[commonStyle.container, containerStyle]}>
      {tabs.map((tab, index) => {
        const isActive = index === activeTab;
        
        // Interpolating color based on the active tab index
        const animatedColor = colorAnim.interpolate({
          inputRange: tabs.map((_, i) => i),
          outputRange: tabs.map((_, i) =>
            i === index ? activeColor : inactiveColor
          ),
        }) as Animated.AnimatedInterpolation<string>; // Explicitly type the interpolation as string

        return (
          <TouchableOpacity
            key={index}
            onPress={() => onTabPress(index)}
            style={[tabStyle]}
          >
            <Animated.View
              style={{ transform: [{ scale: isActive ? scaleAnim : 1 }] }}
            >
              <ActiveImage
                img={tab.icon}
                activeIconStyle={activeIconStyle}
                isActive={isActive}
                inActiveIconStyle={inActiveIconStyle}
              />
            </Animated.View>
            <View style={{ marginTop: 3 }}></View>
            <Animated.Text
              style={[
                { color: animatedColor },
                isActive ? activeTabTextStyle : inactiveTabTextStyle,
              ]}
            >
              {tab.title}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SimpleTab3;
