# react-native-bottom-tab-designs
```js
Custom Bottom Tab Designs
```
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

<BottomTabs
    
  design="AnimatedTab" // design: 'simpleTextTab' | 'simpleTextwithIcon' | 'RectangleTab' | 'ShowActiveTabTitle' | 'HorizontalActiveTab' | 'CircularTab' | 'AnimatedTab';
  tabs={tabs}
  activeTab={activeTab}
  onTabPress={setActiveTab}
  // containerStyle={{backgroundColor:'white',shadowOpacity:0}}
  // tabStyle={{backgroundColor:'red'}}
  activeTabTextStyle={{}}
  inactiveTabTextStyle={{}}
      activeIconStyle={{
          tintColor: Color.white,
          // transform: [{ rotate: '45deg' }],
        }}
  inActiveIconStyle={{}}
/>;
```

A brief description of the package.

```js
<BottomTabs
  design="CircularTab" 
  tabs={tabs}
  activeTab={activeTab}
  onTabPress={setActiveTab}
  // containerStyle={{}}
  // tabStyle={{}}
  activeTabTextStyle={{}}
  inactiveTabTextStyle={{}}
      activeIconStyle={{
          tintColor: Color.white,
        }}
  inActiveIconStyle={{}}
/>;
```
![Alt text](https://github.com/Sandy2210-cool/react-native-bottom-tab-designs/blob/main/example/assets/circular.png?raw=true)


```js
<BottomTabs
  design="RectangleTab" 
  tabs={tabs}
  activeTab={activeTab}
  onTabPress={setActiveTab}
  // containerStyle={{}}
  // tabStyle={{}}
  activeTabTextStyle={{}}
  inactiveTabTextStyle={{}}
      activeIconStyle={{
          tintColor: Color.white,
          transform: [{ rotate: '45deg' }],
        }}
  inActiveIconStyle={{}}
/>;
```
![Alt text](https://github.com/Sandy2210-cool/react-native-bottom-tab-designs/blob/main/example/assets/rectangle.png?raw=true)


```js
<BottomTabs
  design="simpleTextTab" 
  tabs={tabs}
  activeTab={activeTab}
  onTabPress={setActiveTab}
  // containerStyle={{}}
  // tabStyle={{}}
  activeTabTextStyle={{}}
  inactiveTabTextStyle={{}}
      activeIconStyle={{
          tintColor: Color.white,
        }}
  inActiveIconStyle={{}}
/>;
```

![Alt text](https://github.com/Sandy2210-cool/react-native-bottom-tab-designs/blob/main/example/assets/simpleTextTab.png?raw=true)

```js
<BottomTabs
  design="AnimatedTab" 
  tabs={tabs}
  activeTab={activeTab}
  onTabPress={setActiveTab}
  // containerStyle={{}}
  // tabStyle={{}}
  activeTabTextStyle={{}}
  inactiveTabTextStyle={{}}
      activeIconStyle={{
          tintColor: Color.white,
        }}
  inActiveIconStyle={{}}
/>;
```
![Alt text](https://github.com/Sandy2210-cool/react-native-bottom-tab-designs/blob/main/example/assets/AnimatedTab.png?raw=true)

```js
<BottomTabs
  design="HorizontalActiveTab" 
  tabs={tabs}
  activeTab={activeTab}
  onTabPress={setActiveTab}
  // containerStyle={{}}
  // tabStyle={{}}
  activeTabTextStyle={{}}
  inactiveTabTextStyle={{}}
      activeIconStyle={{
          tintColor: Color.white,
        }}
  inActiveIconStyle={{}}
/>;
```
![Alt text](https://github.com/Sandy2210-cool/react-native-bottom-tab-designs/blob/main/example/assets/HorizontalActiveTab.png?raw=true)

```js
<BottomTabs
  design="ShowActiveTabTitle" 
  tabs={tabs}
  activeTab={activeTab}
  onTabPress={setActiveTab}
  // containerStyle={{}}
  // tabStyle={{}}
  activeTabTextStyle={{}}
  inactiveTabTextStyle={{}}
      activeIconStyle={{
          tintColor: Color.white,
        }}
  inActiveIconStyle={{}}
/>;
```
![Alt text](https://github.com/Sandy2210-cool/react-native-bottom-tab-designs/blob/main/example/assets/ShowActiveTabTitle.png?raw=true)






## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
