import { StyleSheet, Text, View, Image, Pressable, ScrollView } from "react-native";
import React, {useState} from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

const HomeScreen = () => {

  const navigation = useNavigation()

  const [visible,setVisible] = useState(false)
  const toggleModal = () =>{
    setVisible(!visible)
  }

  return (
    <View style={tw`flex-1 relative`}>
      {/* <Image source={require('../common/Navbar1.png')} style={tw`absolute w-full`}/> */}
      <SafeAreaView style={tw`flex flex-1 absolute`}>
        <View style={tw`flex-1  mx-4 my-4 z-50`}>
          <View style={[tw`flex-row justify-between w-90`, {}]}>
            <View>
              <Image
                source={require("../common/medicure.png")}
                style={tw`w-16
                
                h-8`}
              />
            </View>
            <View>
              <Text
                style={[
                  tw` font-bold text-xl ml-1`,
                  { fontSize: 18, marginTop: 2 },
                ]}
              >
                MediCure
              </Text>
            </View>
            <Pressable
              onPress={()=>navigation.navigate("Login")}
              style={[
                tw`mr-1`,
                {
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  paddingHorizontal: 5,
                  borderRadius: 7,
                },
              ]}
            >
              <Text style={[tw`text-base font-bold`, {}]}>Get Started</Text>
            </Pressable>
          </View>

          <View style={{ justifyContent: "center", marginTop: 20 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                width: "100%",
                backgroundColor: "#CDF5FD",
                borderRadius: 20,
                padding: 10,
              }}
            >
              <View style={{ flex: 3, paddingLeft:5, alignItems:"center",justifyContent:"center" }}>
                <Text style={{ fontSize: 24, fontWeight: 400 }}>
                  Scan Now to get near accurate results
                </Text>
                <Pressable
                  // onPress={()=>navigation.navigate('Scan')}
                  style={{
                    backgroundColor: "#00A877",
                    padding: 14,
                    width: 120,
                    borderRadius: 23,
                    marginTop:10
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Scan Now
                  </Text>
                </Pressable>
              </View>
              <View style={{ flex: 4,paddingBottom:10 }}>
                <Image
                  source={require("../common/brain1.png")}
                  style={{height:200,width:200}} // Set the desired width and height
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal:20,borderWidth:1,height:350,borderRadius:20}}>
          <View style={{flex:1,flexDirection:"row"}}>
            <Pressable style={{flex:1,padding:20,justifyContent:"center",alignItems:"center",borderRightWidth:1,borderBottomWidth:1}}>
            <Image source={require("../common/dashboard.png")}
                  style={{height:80,width:80}}/>
              <Text style={{fontSize:18,fontWeight:600,marginTop:8}}>DashBoard</Text>
            </Pressable>
            <Pressable
            //  onPress={()=>navigation.navigate('Scan')}
              style={{flex:1,padding:20,justifyContent:"center",alignItems:"center",borderBottomWidth:1}}>
              <Image source={require("../common/loupe.png")}
                  style={{height:80,width:80}}/>
              <Text style={{fontSize:18,fontWeight:600,marginTop:8}}>Scan</Text>
            </Pressable>
          </View>
          <View style={{flex:1,flexDirection:"row"}}>
            <Pressable style={{flex:1,padding:20,justifyContent:"center",alignItems:"center",borderRightWidth:1}}>
            <Image source={require("../common/help.png")}
                  style={{height:80,width:80}}/>
              <Text style={{fontSize:18,fontWeight:600,marginTop:8}}>Help</Text>
            </Pressable>
            <Pressable 
            // onPress={()=>navigation.navigate('About')} 
            style={{flex:1,padding:20,justifyContent:"center",alignItems:"center"}}>
            <Image source={require("../common/info.png")}
                  style={{height:80,width:80}}/>
              <Text style={{fontSize:18,fontWeight:600,marginTop:8}}>About Us</Text>
            </Pressable>
          </View>
          
        </View>
        
        <View style={{flex:1,padding:20}}>
          <Pressable onPress={toggleModal} style={{borderWidth:1,height:115,borderRadius:20,paddingHorizontal:15,paddingTop:5}}>
            <Text style={{fontSize:22,fontWeight:500}}>Privacy Policy</Text>
            <Text style={{fontSize:17}}>At our AI-driven web-based application for brain tumor detection, we are dedicated to empowering doctors and medical...</Text>
          </Pressable>
        </View>
        
      </SafeAreaView>
      <Modal isVisible={visible} onBackdropPress={toggleModal}>
      <ScrollView style={{height:"90%",width:"94%",backgroundColor:'white',position:'absolute',bottom:35,right:10,borderRadius:7,padding:10}}>
        <Text style={{fontSize:20,fontWeight:600}}>Privacy Policy</Text>
        <Text style={[{fontSize:18},styles.text]}>At our AI-driven web-based application for brain tumor detection, we are dedicated to empowering doctors and medical researchers with a powerful tool. We recognize the paramount significance of privacy and are fully committed to safeguarding the personal information of our users. Our Privacy Policy is designed to ensure confidentiality, security, and foster trust and transparency.</Text>
        <Text style={[{fontSize:18},styles.text]}>1. Data Collection:* We collect minimal user information, such as name, email, and medical credentials, to provide our services effectively.</Text>
        <Text style={[{fontSize:18},styles.text]}>2. Data Usage:* Your data is exclusively used to deliver our brain tumor detection services and may be utilized for research and development with a focus on enhancing medical research.</Text>
        <Text style={[{fontSize:18},styles.text]}>3. Data Security:* We employ robust security measures to protect your data from unauthorized access, ensuring it remains safe and confidential.
</Text>
        <Text style={[{fontSize:18},styles.text]}>4. User Control:* You have the right to access, correct, or delete your personal information. We respect your choices and will assist in exercising these rights.</Text>
        <Text style={[{fontSize:18},styles.text]}>5. Transparency:* We are committed to full transparency in our data handling practices. Any significant updates to this policy will be communicated promptly.
</Text>
        <Text style={[{fontSize:18,marginBottom:15},styles.text]}>By using our application, you consent to the terms outlined in this Privacy Policy. We thank you for choosing our platform and trust that our dedication to your privacy will only enhance your experience and contribute to the advancement of medical research.</Text>
      </ScrollView>
    </Modal>
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text:{
    marginVertical:4
  }
});