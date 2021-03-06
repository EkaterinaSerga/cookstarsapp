import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, RegistrationScreen, ForgotPassword } from '../../screens';



const Auth = createStackNavigator();

export default function AuthStack(props) {
  return (
    <Auth.Navigator
      initialRouteName='Login'
      screenOptions={{ headerShown: false }}
    >
      <Auth.Screen name='Login'>
        {() => <Login {...props} log={props.log} />}
      </Auth.Screen>
      <Auth.Screen name='Registration' component={RegistrationScreen} />
      <Auth.Screen name='ForgotPassword' component={ForgotPassword} />
    </Auth.Navigator>
  );
}
