import React from "react";
import {StyleSheet,View,Text,Image} from "react-native"

function CategoryCard (props) {
	return (
			<View style={styles.container}>
				<Image style={{width:22,height:22,borderRadius:11,backgroundColor:"#FF8037"}}/>
				<View>
					<Text style={{fontWeight:"600"}}>Category</Text>
					<Text style={{color:"#989898"}}>X tasks</Text>
				</View>
			</View>
	)
}

const styles = StyleSheet.create({
	container:{
		justifyContent:"space-between",
		padding:5,
		width:90,
		height:100,
		margin:10,
		borderRadius:5,
		backgroundColor:"#ffffff",
		shadowColor: "#000",
		shadowOffset: {
			width: 5,
			height: 13,
		},
		shadowOpacity: 0.15,
		shadowRadius: 20,
		elevation: 16,
	}
})

export default CategoryCard;