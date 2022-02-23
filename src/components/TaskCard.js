import React from "react";
import {StyleSheet,View,Text,Image} from "react-native"

function TaskCard (props) {
	return (
		<View style={styles.container}>
			<Image style={{width:36,height:36,borderRadius:18,backgroundColor:"#FF8037"}}/>
			<View style={{marginLeft:10}}>
				<Text style={{fontSize:20,fontWeight:"600"}}>Title</Text>
				<Text style={{color:"#989898"}}>Subtitle</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flexDirection:"row",
		marginVertical:10,
		alignItems:"center",
	}
})

export default TaskCard;