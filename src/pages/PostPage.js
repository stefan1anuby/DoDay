import React from "react";
import {StyleSheet,View,Text} from "react-native"

function PostPage (props) {
	return (
			<View style={styles.mainContainer}>
				<Text>Post Page</Text>
			</View>
	)
}

const styles = StyleSheet.create({
	mainContainer:{
		backgroundColor:"#FFFFFF",
		flex:1,
		justifyContent: 'center', alignItems: 'center' 
	},
})

export default PostPage;