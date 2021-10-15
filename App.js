
import React,{useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import RegisterScreen from "./screens/Register";
import { StyleSheet } from "react-native";
import detailScreen from "./screens/Details";
import RoomScreen from './screens/RoomScreen';
import RoomDetail from './screens/RoomDetailScreen';
import AppLoading from "expo-app-loading";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
const App = () => {
  const [appReady , setAppReady] = useState(false);

  const checkLogin = () =>{
    
  }

  if(!appReady){
    return <AppLoading 
      startAsync={checkLogin}
      onFinish={() => setAppReady(true)}
      onError={console.warn}
    />
  }


  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Room" 
        screenOptions= {{
          headerShown: false
        }}
        >
        <Stack.Screen name="Room" component={RoomScreen} />  
        <Stack.Screen name="RoomDetail" component={RoomDetail} />  
        {/* // <Stack.Screen
        //   style={style.container}
        //   name="Login"
        //   component={LoginScreen}
          
        // />
        // <Stack.Screen name="Register" component={RegisterScreen} />
        // <Stack.Screen name="Details"  component={detailScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  container:{
    flex:1 ,
    backgroundColor: '#FFF',
    alignItems: "center",
    justifyContent: "center"
  }
})
export default App;