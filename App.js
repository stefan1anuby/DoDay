import React , {useState} from "react";
import { ImageBackground , Text , View , StyleSheet , Image ,TouchableOpacity , Button} from "react-native";
import Header from "./src/components/Header"
import MainPage from "./src/pages/MainPage";
import SecondPage from "./src/pages/SecondPage";
import PostPage from "./src/pages/PostPage";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App (props) {

    return (
        <ImageBackground style={{height:"100%",width:"100%",backgroundColor:"#F5F5F5"}}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="HomeTabs" options={{headerShown:false}} children={({navigation}) => (
                            <Tab.Navigator screenOptions={{tabBarStyle:[styles.floatingTab,styles.shadow],tabBarShowLabel:false}}>
                                <Tab.Screen name="Home" component={MainPage} options={{tabBarIcon: ({focused}) => 
                                    <Image source={require("./assets/icons/checklist.png")} style={[styles.tabIcon,{tintColor: focused ? "#ffffff" : "#000000"}]} /> }} />
                                <Tab.Screen name="Post" children={() => {}} options={{headerShown: false,
                                    tabBarIcon: ({focused}) => (<Image source={require('./assets/icons/plus.png')} style={{width:30,height:30,tintColor:"#fff"}}/>),
                                    tabBarButton: (props) => <AddButon {...props} navigation={navigation}/>}}/>
                                <Tab.Screen name="Settings" component={SecondPage} options={{tabBarIcon: ({focused}) =>
                                    <Image source={require("./assets/icons/profile-user.png")} style={[styles.tabIcon,{tintColor: focused ? "#ffffff" : "#000000"}]} /> }} />
                            </Tab.Navigator>          
                        )}/>
                        <Stack.Screen name="PostScreen" component={PostPage}/>
                    </Stack.Navigator>
                </NavigationContainer>
    </ImageBackground>
    );
} 

const styles = StyleSheet.create({
    floatingTab:{
        position:"absolute",
        bottom:15,
        left:15,
        right:15,
        borderRadius:25 ,
        height:70,
        backgroundColor:"#89CFF0",
    },
    tabIcon:{
        resizeMode:"contain",
        width:25,
        height:25
    },
    shadow :{
        shadowColor:"#7F5DF0",
        shadowOffset:{width:0,height:10},
        shadowOpacity: 0.25,
        shadowRadius:3.5,
        elevation:5
    }
})

const AddButon = ({children,onPress,navigation}) => (
    <TouchableOpacity style={{top:-30,justifyContent:"center",alignItems:"center"}} onPress={ () =>  navigation.navigate("PostScreen") }>
        <View style={[{width:70,height:70,borderRadius:35,backgroundColor:"#e32f45"},styles.shadow]}>
            {children}
        </View>
    </TouchableOpacity>
)

export default App;