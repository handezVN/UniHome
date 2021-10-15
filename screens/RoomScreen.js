import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,Image, TouchableOpacity,StyleSheet, Button} from 'react-native';

export default function RoomForm({navigation}) {


    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
        const response = await fetch('http://113.173.201.16/api/Room');
        const json = await response.json();
        setData(json);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    return ( 
    <View>
        <FlatList
          data={data}
          keyExtractor={item => `key-${item.roomId}`}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('RoomDetail',{roomId: item.roomId })}>
                <View style={{padding: 20 }}>
                <Image style={styles.image} source={{uri: `${item.photoUrl}`}}></Image>
                <View style={styles.container}>
                <Text style={{color:'white' , fontSize : 16 }}>{item.title} {item.room}</Text>
                <Text style={{color:'white' , textAlign:'right' } }>{item.price} VND</Text>
                </View>
                </View>
            </TouchableOpacity>
          )}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{backgroundColor: '#6AA48F' , padding : 10 , borderBottomLeftRadius:12 ,borderBottomRightRadius:12 , flexDirection: 'row',justifyContent: 'space-between',
    alignItems: 'center', },
    image:{
        height:150 ,
        width: '100%' ,
        borderTopRightRadius : 12,
        borderTopLeftRadius : 12
      },

})
