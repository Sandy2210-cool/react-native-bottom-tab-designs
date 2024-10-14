import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  type ImageStyle,
  type StyleProp,
  type ImageSourcePropType,
} from 'react-native';

interface ActiveImageProps {
  activeIconStyle: StyleProp<ImageStyle>;
  inActiveIconStyle: StyleProp<ImageStyle>;
  isActive: boolean;
  img: ImageSourcePropType | string; // Handle both URL and local images
}

const ActiveImage: React.FC<ActiveImageProps> = ({
  img,
  activeIconStyle,
  inActiveIconStyle,
  isActive,
}) => {
  // Determine if img is a URL (string) or a local resource (require() returns a number)
  const imageSource =
    typeof img === 'string' ? { uri: img } : img;

  return (
    <View>
      <Image
        source={imageSource}
        style={[
          styles.IconStyle,
          isActive ? activeIconStyle : inActiveIconStyle,
        ]}
      />
    </View>
  );
};

export default ActiveImage;

const styles = StyleSheet.create({
  IconStyle: { width: 24, height: 24, alignSelf: 'center' },
});
