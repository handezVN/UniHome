import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import {
    Button,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import backgroundLogin from "../assets/background-login.jpg";
import logo from "../assets/logo.png";
import { Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";




export default function App({navigation}) {

  const [username , setUserName] = useState();
  const [password , setPassword] = useState();
  const [error , setError] = useState();
  const [token , setToken] = useState();
  const singing = async() =>{
    if(username != "" && password != ''){
      setError('');
    }else{
      setError("Please ! UserName or Password can not be empty !")
    }
    if(error != ''){
      alert(' Lỗi rồi');
    }else{
      await fetch('http://113.173.201.16/api/Auth/login',{
        method: 'POST',
        headers:{
          'Accept':'application/json',
          'Content-type':'application/json'
        },
        body: JSON.stringify({
          "email"   : username,
          "password": password
        })
      }).then(res => res.json())
      .then(resData =>{
        if(resData.token != undefined){
          setToken(resData.token);
          alert(resData.token);
        }else{
          alert('Hãy kiểm tra lại username hoặc password !');
        }
      })
    }
  }
  const forgot = () =>{
    alert('Forgot Password');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={backgroundLogin}
        blurRadius={1}
      >
        <View style={styles.content}>
          <View style={styles.loginArea}>
            <Text style={styles.loginText}>Register</Text>
          </View>

          <View style={styles.center}>
            <View style={styles.inputArea}>
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5 name="user" style={styles.iconLock} />
                <TextInput
                  style={[styles.input, styles.inputUsername]}
                  placeholder="Username"
                  placeholderTextColor="#cdcdcf"
                  value={username}
                  onChangeText={(x) => setUserName(x)}
                  onChange={() => setError('')}
                />
              </View>
              <View style={styles.dividerLine} />
              <TouchableOpacity style={styles.loginButon}>
                <FontAwesome5 name="arrow-right" size={24} color="white" onPress={singing}/>
                
              </TouchableOpacity>
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5 name="eye-slash" style={styles.iconLock} />
                <TextInput
                  style={[styles.input, styles.inputPassword]}
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor="#cdcdcf"
                  value={password}
                  onChangeText={(x) => setPassword(x)}
                  onChange={() => setError('')}
                />
              </View>
            </View>
            <TouchableOpacity>
              <Text style={styles.textForgot} onPress={forgot}>Forgot password?</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.registerArea}>
            <TouchableOpacity>
              <Text style={styles.registerText}
                onPress = { () => navigation.navigate('Login')}
               >Login</Text>
            </TouchableOpacity>
          </View>

          <View style={{
              backgroundColor:'#FFF',
              bottom: -100
          }}>
            <TouchableOpacity>
              <Text style={styles.registerText}
                onPress = { () => navigation.navigate('Details')}
               >Details</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <FontAwesome5
              name="leaf"
              style={styles.logo}
              size={80}
              color="white"
            />
            {/* <Image source={logo} style={styles.logo} /> */}
            <Text style={styles.topFooterText}>UniHome</Text>
            <Text style={styles.normalFooterText}>
              Vì cộng đồng-Kiến tạo an cư
            </Text>
            <Text style={styles.normalFooterText}>Nơi cuộc sống tốt đẹp</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}


const windownHeight = Dimensions.get("window").height;
const windownWidth  = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    height: windownHeight,
    width: (windownHeight * 418) / 745,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  loginArea: {
    position: "absolute",
    top: windownHeight / 4,
  },
  loginText: {
    fontSize: 30,
    color: "#fff",
    // fontFamily: "brush script mt",
  },
  content: {
    height: windownHeight,
    width: windownWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    position: "absolute",
    top: windownHeight / 2,
    left: 0,
    transform: [{ translateY: -50 }],
  },
  inputArea: {
    backgroundColor: "#fff",
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  input: {
    color: "#333333",
    fontSize: 16,
    height: 44,
    width: 250,
    paddingHorizontal: 25,
  },
  inputUsername: {
    borderBottomWidth: 0,
    borderTopRightRadius: 30,
  },
  iconLock: {
    color: "#CCCCCC",
    zIndex: 10,
    position: "absolute",
    left: 2,
    bottom: 10,
    margin: 5,
  },
  inputPassword: {
    borderBottomRightRadius: 30,
  },
  textForgot: {
    color: "#fff",
    marginVertical: 10,
    position: "relative",
    left: 150,
    fontWeight: "bold",
  },
  dividerLine: {
    width: 180,
    borderBottomWidth: 1,
    borderColor: "#cbccd0",
  },
  loginButon: {
    backgroundColor: "#157efb",
    height: 65,
    width: 65,
    position: "absolute",
    right: -25,
    transform: [{ translateY: 10 }],
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  registerArea: {
    position: "absolute",
    bottom: windownHeight / 4,
    left: 0,
    backgroundColor: "#fff",
    height: 50,
    width: 120,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
    color: "#eb0d5f",
    fontSize: 25,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
  },
  topFooterText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  normalFooterText: {
    color: "#fff",
  },
});
