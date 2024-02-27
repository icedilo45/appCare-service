import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import * as WebBrowser from 'expo-web-browser'
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/WarmUpbrowser';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{alignItems:'center'}} >
      <Image source={require('./../../../assets/images/ToGG.png')}
        style={styles.loginImage}
      />
      <View style={styles.subContainer} >
        <Text style={{fontSize:22, color:Colors.WHITE}}>Welcome to 
          <Text style={{fontWeight:'bold', color:Colors.GOLD}}> ToGG </Text> 
          WorldWide
        </Text>
        <Text style={{fontStyle:'italic', color:Colors.WHITE, fontSize:17, fontWeight:'bold'}}>Find our year round Programs and Activities on this App</Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{textAlign:'center', fontSize:17 , color:Colors.PRIMARY}}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginImage:{
    width:300,
    height:450,
    marginTop:70,
    borderWidth:4,
    borderColor:Colors.GOLD,
    borderRadius:15
  },
  subContainer:{
    width:'100%',
    backgroundColor:Colors.BLUE,
    height:'70%',
    marginTop:-20,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:20,
    alignItems: 'center',
  },
  button:{
    padding:15,
    backgroundColor:Colors.WHITE,
    borderRadius:50,
    marginTop:35,
    width:'70%'
  }
})