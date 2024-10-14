import { useState} from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import BottomTabs from 'react-native-bottom-tab-designs';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Home',
      icon: require('../assets/icon.png'),
    },
    {
      title: 'Chat',
      icon: 'https://cdn-icons-png.flaticon.com/512/5602/5602732.png',
    },
    {
      title: 'Profile',
      icon: require('../assets/favicon.png'),
    },
    {
      title: 'Profile',
      icon: require('../assets/favicon.png'),
    },
    {
      title: 'Notification',
      icon: 'https://cdn-icons-png.flaticon.com/512/5602/5602732.png',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <BottomTabs
        design='CircularTab'
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={setActiveTab}
        // containerStyle={{backgroundColor:'white',shadowOpacity:0}}
        // tabStyle={{backgroundColor:'red'}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
