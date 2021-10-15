import React from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const detailScreen = ({navigation}) =>{
    return(
        <SafeAreaView>
            <View>Details Screens</View>
            <View>
                <TouchableOpacity style={{
                    margin: 5,
                    backgroundColor: '#eb0d5f'
                }} onPress={() => navigation.goBack()}>
                    Go back to Login .
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        
    )
}

export default detailScreen;