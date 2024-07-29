import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';
import '../app/(tabs)/index.css';
import { s } from "react-native-wind";
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
// import '../(tabs)/index.css'
import { StatusBar } from 'expo-status-bar';

import { images } from '../constants'

export default function HomeScreen() {
  return (
    // <View  style={styles.container}>
    //   <Text className='' style={styles.titleCointainer}>
    //     hello world 
    //     dsadadsad test
    //   </Text>
    //   <StatusBar style='auto'/>
    //   <Link href={'home'} style={styles.titleCointainer}>Home</Link>
    // </View>
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View style={[{
          // justifyContent: "center",
          alignItems: 'center',
          // height: "100%",
          // width:'100%',
         
        }]}>
          <Text style={{}}>
            sinf
          </Text>
          <Image
            source={images.logo}
            style={{height:130,width:84}}
            resizeMode='contain'
          ></Image>
         
          <View style={{position:'relative',marginTop:5}}>
            <Text style={[styles.PrincipaleText]}>
              Discover Endless Possibilities with {''}
              <Text style={{color:'#FF8E01'}}>
                  Shooter
              </Text>
              <Image
              style={{width:136,height:15,position:'absolute'}}
              source={images.path}
              resizeMode='contain'
              />
            </Text>
          </View>
          <Image
          source={images.cards}
          style={{maxWidth:300,width:"100%",height:300,}}
          resizeMode='contain'
          ></Image>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop:0,
    // height: '100%',
    backgroundColor: "#161622",

  },
  titleCointainer: {
    color: 'white',
    fontSize: 30,

    // fontFamily:''
  },
  PrincipaleText:{
    fontSize:28,
    fontWeight:'bold',
    // lineHeight:30,
    color:"white",
    fontStyle:"italic",
    textAlign:"center"

  }
  // reactLogo: {
  //   height: 178,
  //   width: 290,
  //   bottom: 0,
  //   left: 0,
  //   position: 'absolute',
  // },
});
