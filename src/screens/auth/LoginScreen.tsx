import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import {ArrowsSvg} from '../../assets/svg';
import {Logo} from '../../assets/images';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackNavigatorParams} from '../../navigation/types';
import InputFieldComponent from '../../components/InputFieldComponent';

const LoginScreen = () => {
  const [usePhone, setUsePhone] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const {navigate} = useNavigation<NavigationProp<RootStackNavigatorParams>>();
  return (
    <ScreenWrapper>
      <View className="bg-white rounded-3xl p-6 w-[90%] self-center mt-28 shadow-lg z-10">
        <Image
          source={Logo}
          className="w-20 h-20 self-center  absolute -top-10"
        />
        <Text className="text-2xl font-bold text-center text-gray-800 my-[18px]">
          Log in
        </Text>
        <Text className="text-[14px] leading-[20px] tracking-[0.02em] text-center font-Poppins font-normal text-textColor mt-[5px]">
          Enter your account details below to login in now.
        </Text>

        {/* Toggle between Email and Phone */}
        <View className="flex-row bg-[#F4F4F4] mb-[29px] rounded-full p-1 mt-6 w-[264px] self-center h-[46px]">
          <TouchableOpacity
            className={`flex-1 rounded-full py-3 h-full ${
              !usePhone ? 'bg-primary' : ''
            }`}
            onPress={() => setUsePhone(false)}>
            <Text
              className={`text-center text-sm font-medium h-full ${
                !usePhone ? 'text-white' : 'text-gray-800'
              }`}>
              With Email
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 rounded-full py-3 ${
              usePhone ? 'bg-primary' : ''
            }`}
            onPress={() => setUsePhone(true)}>
            <Text
              className={`text-center text-sm font-medium ${
                usePhone ? 'text-white' : 'text-gray-800'
              }`}>
              Phone no.
            </Text>
          </TouchableOpacity>
        </View>

        {/* Input Field - Email or Phone */}
        <InputFieldComponent
          label={usePhone ? 'Phone no' : 'Email'}
          value={email}
          onChangeText={setEmail}
          placeholder={usePhone ? '05XXXXXXXX' : 'abc@gmail.com'}
          type={usePhone ? 'phone' : 'email'}
        />

        {/* Password Field */}
        <InputFieldComponent
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="********"
          type="password"
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword(!showPassword)}
        />

        <Text className="text-right text-sm text-blue-600 mt-[26px] mb-[37px]">
          Forgot password?
        </Text>

        <TouchableOpacity className="flex-row items-center justify-between mt-5 h-[56px] bg-primary rounded-full px-4 w-[264px] self-center">
          <Text className="text-white font-Archivo font-medium text-[14px] leading-[100%] tracking-[0] text-center ml-2">
            Login account
          </Text>

          <View className="w-[42px] h-[42px] rounded-full bg-white items-center justify-center">
            <ArrowsSvg />
          </View>
        </TouchableOpacity>

        <Text className="text-center text-sm mt-[47px] mb-[36px]">
          First time came here?{' '}
          <Text
            className="text-[#3E8283] font-semibold underline cursor-pointer"
            onPress={() => {
              navigate('register');
            }}>
            Sign up for free
          </Text>
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default LoginScreen;
