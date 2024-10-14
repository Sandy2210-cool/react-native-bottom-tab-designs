import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import SimpleTab from './Component/SampleTab';
import SimpleTab2 from './Component/SimpleTab2';

import RectangleTab from './Component/ReactangleTab';
import CircularBottom from './Component/CircularBottom';
import ShowHideTitle from './Component/ShowHideTitle';
import ShowActiveTab from './Component/ShowActiveTab';
import Color from './Utils/Color';
import type { TabBarProps } from './Utils/Interfaces';
import SimpleTab3 from './Component/SimpleAnimated';

// Define the type for each tab

const BottomTabs: React.FC<TabBarProps> = ({
  tabs,
  activeTab,
  onTabPress,
  design,
  activeIconStyle,
  activeScale = 1.2,
  activeColor = Color.activeColor,
  inactiveColor = Color.label_dim_color,
  tabStyle,
  activeTabTextStyle,
  inactiveTabTextStyle,
  containerStyle,
  diamondViewStyle,
  inActiveIconStyle,
  title,
}) => {
  const componentsMap = {
    simpleTextTab: SimpleTab,
    simpleTextwithIcon: SimpleTab2,
    RectangleTab: RectangleTab,
    ShowActiveTabTitle: ShowHideTitle,
    HorizontalActiveTab: ShowActiveTab,
    CircularTab: CircularBottom,
    AnimatedTab:SimpleTab3,
    default: CircularBottom,
  };

  const SelectedComponent = componentsMap[design] || componentsMap.default;

  const commonProps = {
    tabs,
    activeTab,
    onTabPress,
    activeScale,
    activeColor,
    inactiveColor,
    tabStyle,
    activeTabTextStyle,
    inactiveTabTextStyle,
    activeIconStyle,
    containerStyle,
    inActiveIconStyle,
  };

  return (
    <View style={styles.container}>
      <SelectedComponent
        {...commonProps}
        diamondView={diamondViewStyle}
        title={title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
  },
});

export default BottomTabs;
