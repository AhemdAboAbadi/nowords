import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import {ArrowsSvg} from '../../assets/svg';
import {Logo} from '../../assets/images';
import InputFieldComponent from '../../components/InputFieldComponent';

const RegisterScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <ScreenWrapper title="Create Account">
      <View className="bg-white rounded-3xl p-6 w-[90%] self-center mt-16 shadow-lg z-10">
        <View className="items-center -mt-16 mb-2">
          <View className="w-20 h-20 rounded-full bg-white items-center justify-center shadow-md border-4 border-[#3E8283]">
            <Image source={Logo} className="w-16 h-16" />
          </View>
        </View>
        <Text className="text-2xl font-bold text-center text-gray-800 my-2">
          Create Account
        </Text>
        <Text className="text-[14px] leading-[20px] tracking-[0.02em] text-center font-normal text-gray-500 mb-5">
          Enter your account details below to create your new account.
        </Text>

        <InputFieldComponent
          label="Full name"
          value={fullName}
          onChangeText={setFullName}
          placeholder="fullname"
          type="user"
        />

        <InputFieldComponent
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="abc@gmail.com"
          type="email"
        />

        <InputFieldComponent
          label="Phone no"
          value={phone}
          onChangeText={setPhone}
          placeholder="+966 2235 6566"
          type="phone"
        />

        <InputFieldComponent
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="********"
          type="password"
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword(!showPassword)}
        />

        <InputFieldComponent
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="********"
          type="password"
          showPassword={showConfirmPassword}
          onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
        />

        {/* Create Account Button */}
        <TouchableOpacity className="flex-row items-center justify-between mt-2 h-[56px] bg-gradient-to-r from-[#3E8283] to-[#1F1F39] rounded-full px-4 w-[264px] self-center shadow-md">
          <Text className="text-white font-medium text-[16px] text-center ml-2">
            Create account
          </Text>
          <View className="w-[42px] h-[42px] rounded-full bg-white items-center justify-center">
            <ArrowsSvg />
          </View>
        </TouchableOpacity>

        {/* Login Link */}
        <Text className="text-center text-sm mt-8 mb-2 text-gray-500">
          Already have a account?{' '}
          <Text className="text-[#3E8283] font-semibold underline">Log in</Text>
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default RegisterScreen;
