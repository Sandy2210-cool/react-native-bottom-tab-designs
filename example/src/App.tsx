import { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import BottomTabs from 'react-native-bottom-tab-designs';
import Color from '../../src/Utils/Color';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Home',
      icon: 'https://cdn-icons-png.flaticon.com/128/25/25694.png',
    },
    {
      title: 'Chat',
      icon: 'https://cdn-icons-png.flaticon.com/128/2769/2769104.png',
    },

    {
      title: 'Profile',
      icon: 'https://cdn-icons-png.flaticon.com/128/3033/3033143.png',
    },
    {
      title: 'Notification',
      icon: 'https://cdn-icons-png.flaticon.com/128/3541/3541852.png',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <BottomTabs
        design="AnimatedTab" // design: 'simpleTextTab' | 'simpleTextwithIcon' | 'RectangleTab' | 'ShowActiveTabTitle' | 'HorizontalActiveTab' | 'CircularTab' | 'AnimatedTab';
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={setActiveTab}
        activeIconStyle={{
          tintColor: Color.white,
          // transform: [{ rotate: '45deg' }],
        }}
        // containerStyle={{backgroundColor:'white',shadowOpacity:0}}
        // tabStyle={{backgroundColor:'red'}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.steel_gray,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
