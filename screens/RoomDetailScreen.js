import React from "react";
import { TouchableOpacity, View , Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const detailScreen = ({navigation , route}) =>{
    return(
        <SafeAreaView>
            <View><Text style={{color:'black'}}>{route.params.roomId}</Text></View>
            <View>
                <TouchableOpacity style={{
                    margin: 5,
                    backgroundColor: '#eb0d5f'
                }} onPress={() => navigation.goBack()}>
                  <Text>  Go back to Login . </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        
    )
}

export default detailScreen;