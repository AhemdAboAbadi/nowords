import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {
  EmailIcon,
  EyeIcon,
  LockPasswordIcon,
  PhoneIcon,
  userIcon as UserIcon,
} from '../assets/svg';
import {Logo} from '../assets/images';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  type?: 'text' | 'email' | 'phone' | 'password' | 'user';
  showPassword?: boolean;
  onTogglePassword?: () => void;
  required?: boolean;
}

const InputFieldComponent: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  type = 'text',
  showPassword,
  onTogglePassword,
  required = true,
}) => {
  const renderIcon = () => {
    switch (type) {
      case 'email':
        return <EmailIcon className="mr-2 opacity-70" />;
      case 'phone':
        return <PhoneIcon className="mr-2 opacity-70" />;
      case 'password':
        return <LockPasswordIcon className="mr-2 opacity-70" />;
      case 'user':
        return <UserIcon className="mr-2 opacity-70" />;
      default:
        return <Image source={Logo} className="w-5 h-5 opacity-50 mr-2" />;
    }
  };

  return (
    <View className="mb-[29px]">
      <View className="flex flex-row items-center border border-gray-300 rounded-xl px-4 bg-white">
        {renderIcon()}
        <View className="absolute -top-2 left-4 bg-white px-1 z-10">
          <Text className="text-sm text-[#1F1F39] font-semibold">
            {label}
            {required && <Text className="text-red-500">*</Text>}
          </Text>
        </View>
        <TextInput
          placeholder={placeholder}
          className="flex-1 ml-2 text-m text-gray-700 h-[48px]"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={type === 'password' && !showPassword}
          keyboardType={
            type === 'email'
              ? 'email-address'
              : type === 'phone'
              ? 'phone-pad'
              : 'default'
          }
          autoCapitalize={type === 'text' ? 'words' : 'none'}
        />
        {type === 'password' && onTogglePassword && (
          <TouchableOpacity onPress={onTogglePassword}>
            <Text className="text-gray-400 text-lg">
              <EyeIcon />
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputFieldComponent;
