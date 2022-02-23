import React from "react";
import {
	StyleSheet,
	View,
	Text
} from "react-native"

function Footer (props) {

	return (

		<View style = {styles.container} >
			<Text>bOS</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		height:100,
		//bottom:0
	}
})

export default Footer;