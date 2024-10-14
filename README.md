# react-native-bottom-tab-designs

Custom Bottom Tab Designs

## Installation

```sh
npm install react-native-bottom-tab-designs
```

## Usage

```js
import BottomTabs from 'react-native-bottom-tab-designs';

// ...

  const [activeTab, setActiveTab] = useState(0);
   const tabs = [
    {
      title: 'Home',
      icon: require('../assets/favicon.png'),
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
      title: 'Notification',
      icon: 'https://cdn-icons-png.flaticon.com/512/5602/5602732.png',
    },
  ];

<BottomTabs
    
  design="CircularTab" // design: 'simpleTextTab' | 'simpleTextwithIcon' | 'RectangleTab' | 'ShowActiveTabTitle' | 'HorizontalActiveTab' | 'CircularTab' | 'AnimatedTab';
  tabs={tabs}
  activeTab={activeTab}
  onTabPress={setActiveTab}
  // containerStyle={{backgroundColor:'white',shadowOpacity:0}}
  // tabStyle={{backgroundColor:'red'}}
  activeTabTextStyle={{}}
  inactiveTabTextStyle={{}}
  activeIconStyle={{}}
  inActiveIconStyle={{}}
/>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
