import { StyleSheet, Text, View, Pressable } from 'react-native'
import React , { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-paper';

const Login = () => {

    const navigation = useNavigation()

    const[email,setEmail] = useState("")
    const[pass,setPass] = useState("")

  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <View style={{height:450,width:340,backgroundColor:'white',borderRadius:40,shadowColor: '#171717',shadowOffset: {width: -2, height: 4},shadowOpacity: 0.2,shadowRadius: 3}}>
                <View style={{flex:1,flexDirection:'column'}}>
                    <View style={{marginTop:25,marginBottom:20}}>
                        <Text style={{fontSize:38,fontFamily:'',textAlign:'center'}}>Login</Text>
                    </View>
                    <View style={{alignItems:'center',marginHorizontal:22}}>
                        <Text style={{fontSize:25,textAlign:'center'}}>Be a cause for someone's life</Text>
                    </View>
                    <View style={{marginHorizontal:24,marginTop:20}}>
                       {/* <TextInput variant="outlined" label="Username" style={{ marginVertical:7}} /> */}
                       <TextInput onChangeText={(text)=>setEmail(text)} variant="outlined" label="Email" style={{ marginVertical:7}} />
                       <TextInput onChangeText={(text)=>setPassword(text)} variant="outlined" label="Password" style={{ marginVertical:7}} />
                       {/* <TextInput variant="outlined" label="Confirm Password" style={{ marginVertical:7}} /> */}
                       <View style={{marginHorizontal:20,alignItems:'center',marginTop:10}}>
                           <Pressable style={{paddingHorizontal:20,paddingVertical:10,backgroundColor:'skyblue',borderRadius:10}}><Text style={{fontSize:20,color:'white'}}>SignUp</Text></Pressable>
                       </View>
                    </View>
                    <View style={{alignItems:'center',marginTop:15}}>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:17,marginRight:5}}>New to this app?</Text>
                        <Pressable onPress={()=>navigation.navigate("SignUp")}><Text style={{color:'skyblue',fontSize:17}}>Sign Up</Text></Pressable>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})