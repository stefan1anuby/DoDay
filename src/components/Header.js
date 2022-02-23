import React from "react";
import {StyleSheet,View,Text,TouchableHighlight,Image} from "react-native"

function Header (props) {

	return (

		<View style = {styles.container} >
			<Text style={{color:"#FFFFFF"}}>Saaluut</Text> 
			<Text style={{fontWeight:"700",fontSize:16}}> Home </Text>
			<TouchableHighlight onPress={() => (console.log("settings pressed"))}>
        		<Image style={styles.settingsIcon} source={props.source} />
      		</TouchableHighlight>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		height: 100,
		backgroundColor: "#FFFFFF",
		paddingTop:30,
		marginBottom:5,
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"space-between",
	},
	settingsIcon:{
		resizeMode:"contain",
        width:25,
        height:25
	}
})

export default Header;