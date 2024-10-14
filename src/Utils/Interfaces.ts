import type {  ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

interface Tab {
    title: string;
    icon: string;
  }

export interface RectangleTabProps {
    tabs: Tab[];
    activeTab: number;
    onTabPress: (index: number) => void;
    customIcons?: React.ReactNode[];
    activeScale?: number;
    activeColor?: string | undefined;
    inactiveColor?: string | undefined;
    tabStyle?: StyleProp<ViewStyle>;
    activeTabTextStyle?: StyleProp<TextStyle>;
    inactiveTabTextStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    activeIconStyle?: StyleProp<ImageStyle>;
    inActiveIconStyle?: StyleProp<ImageStyle>;
    diamondView?: StyleProp<ViewStyle>;
    title?:boolean|undefined
  }

  export interface TabBarProps {
    tabs: Tab[];
    activeTab: number;
    onTabPress: (index: number) => void;
    design: 'simpleTextTab' | 'simpleTextwithIcon' | 'RectangleTab' | 'ShowActiveTabTitle' | 'HorizontalActiveTab' | 'CircularTab' | 'AnimatedTab';
    activeScale?: number;
    activeColor?: string;
    inactiveColor?: string;
    tabStyle?: StyleProp<ViewStyle>;
    activeTabTextStyle?: StyleProp<TextStyle>;
    inactiveTabTextStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    activeIconStyle?: StyleProp<ImageStyle>;
    inActiveIconStyle?: StyleProp<ImageStyle>;
    diamondViewStyle?: StyleProp<ViewStyle>;
    title?: boolean | undefined;
  }

  export interface SimpleActiveTextProps {
    activeColor: string | undefined;
    activeTabTextStyle?: StyleProp<TextStyle>; // Optional additional style for active text
    title: string;
    isActive: boolean;
    inactiveTabTextStyle?: StyleProp<TextStyle>; // Optional additional style for inactive text
    inactiveColor: string | undefined;
  }
  