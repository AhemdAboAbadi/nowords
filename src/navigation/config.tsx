import {LoginScreen, RegisterScreen} from '../screens/auth';
import {HomeScreen} from '../screens';
import {RootStackNavigatorParams} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackNavigatorParams>();

export const defaultScreenOptions = {
  headerTransparent: true,
  headerShown: false,
};

export const AuthStack = () => (
  <Stack.Navigator screenOptions={defaultScreenOptions}>
    <Stack.Screen name="login" component={LoginScreen} />
    <Stack.Screen name="register" component={RegisterScreen} />
  </Stack.Navigator>
);

export const MainStack = () => (
  <Stack.Navigator screenOptions={defaultScreenOptions}>
    <Stack.Screen name="home" component={HomeScreen} />
  </Stack.Navigator>
);
