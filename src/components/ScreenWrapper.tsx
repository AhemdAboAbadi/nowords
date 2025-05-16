import {Image, Text, View} from 'react-native';
import React, {FC, ReactNode} from 'react';

interface ScreenWrapperProps {
  children: ReactNode | ReactNode[];
  title?: string;
}

const image = require('../assets/images/backgroundImg.png');

const ScreenWrapper: FC<ScreenWrapperProps> = ({
  children,
  title = 'Welcome Back!',
}) => {
  return (
    <View className="flex-1 bg-gray relative">
      <Image
        source={image}
        className="absolute top-0 left-0 w-full h-[302px] z-0 bg-[#3E8283] rounded-b-[30px]"
      />
      <Text className="text-white text-5xl font-bold self-center mt-20">
        {title}
      </Text>
      <View className="flex-1 bottom-20 justify-center z-10">{children}</View>
    </View>
  );
};

export default ScreenWrapper;
