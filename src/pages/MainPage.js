import React from "react";
import { StyleSheet ,ScrollView ,View , Text} from "react-native"
import CategoryCard from "../components/CategoryCard";
import TaskCard from "../components/TaskCard";

function MainPage (props) {
	return (
		<ScrollView style={styles.mainContainer} showsHorizontalScrollIndicator={false}>
			<View style={styles.categorySection}>
				<Text style={{marginLeft:20}}>Quick Checklist</Text>
				<ScrollView style={styles.categoryList} contentContainerStyle={{alignItems:"center"}} horizontal showsHorizontalScrollIndicator={false}>
					<CategoryCard/>
					<CategoryCard/>
					<CategoryCard/>
					<CategoryCard/>
					<CategoryCard/>
					<CategoryCard/>
					<CategoryCard/>
				</ScrollView>
			</View>
			<View style={styles.tasksSection}>
				<Text>Your Tasks</Text>
				<View style={styles.tasksList}>
					<TaskCard/>
					<TaskCard/>
					<TaskCard/>
					<TaskCard/>
					<TaskCard/>
					<TaskCard/>
					<TaskCard/>
					<TaskCard/>
					<TaskCard/>
					<TaskCard/>
					<TaskCard/>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	mainContainer:{
		backgroundColor:"#FFFFFF",
		flex:1
	},
	categoryList:{
		height:150
	},
	tasksSection:{
		flex:1,
		paddingHorizontal:20
	}
})

export default MainPage;