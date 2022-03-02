import React , {useState} from "react";
import {StyleSheet,View,Text,TextInput,Switch,TouchableOpacity,Button,Modal} from "react-native"
import Tags from "react-native-tags";
import DateTimePicker from '@react-native-community/datetimepicker'

function isValidInput(input){
	if(input.name.length < 3 ) {alert("The task name is too short") ; return false;}
	return true;
}

function PostPage (props) {

	//console.log(props)

	const [name, onChangeName] = useState("")
	const [date,setDate] = useState(new Date())
	const [mode,setMode] = useState('date')
	const [show,setShow] = useState(false)
	const [text,setText] = useState({date:"",startingTime:"",endingTime:""})
	const [isEnabled, setIsEnabled] = useState(false);
  	const toggleSwitch = () => setIsEnabled(previousState => !previousState);
	const [tags,setTags] = useState([]);

	const onChange = (event , selectedDate) => {
		
		const currentDate = selectedDate || date;
		setShow(Platform.OS === 'ios');
		if(event.type == "set"){
			setDate(currentDate);
			
			let tempDate = new Date(currentDate);
			
			//let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
			let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
			let fDate = tempDate.toDateString()
			
			//console.log(fDate ,fTime)
			
			setText( (previousState) => (mode === "date" ? { date : fDate , startingTime : previousState.startingTime } : { date : previousState.date , startingTime : fTime} ) )
		}
	}

	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	}

	const sendTask = () => {
		let post = {
			"id": Date(),
			"name" : name,
			"time": text,
			"remindMe": isEnabled,
			"tags": tags
		}
		if(isValidInput(post)) {
			console.log("postarea a fost ok")
			props.navigation.goBack();
		}
		else{
			console.log("postarea nu a mers")
		}
		console.log(post);

	}

	return (

				<View style={styles.mainContainer}>
					<Text>Name</Text>
					<TextInput style={styles.input} onChangeText={onChangeName} value={name} placeholder="Task Name" placeholderTextColor="#000" />
					<Text>Date</Text>
					<TouchableOpacity onPress={() => showMode('date')}>
						<View style={styles.input} >
							<Text>{text.date || "Astazi"}</Text>
							<Text>Icon</Text>
						</View>
					</TouchableOpacity>
					<Text>Time</Text>
					<TouchableOpacity onPress={() => showMode('time')}>
						<View style={styles.input}>
							<Text>{text.startingTime || "Acum"}</Text>
							<Text>Icon</Text>
						</View>
					</TouchableOpacity>
					<View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
						<View style={{flexDirection:"row"}}>
							<Text>Icon </Text>
							<Text>Remind Me</Text>
						</View>
						<Switch trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"} onValueChange={toggleSwitch} value={isEnabled}
					/>
					</View>

					<Text>Category</Text>
					<MyTagInput onChangeTags={(tags) => setTags(tags)}/>
					
					< Button title = "Create Task" color = "#841584" borderRadius={30} onPress={sendTask} />
					{
						
						show && (
							<DateTimePicker testID="dateTimePicker" value={date} mode={mode} is24Hour={true} display='default' onChange={onChange}/>
							)
					}

			</View>
	)
}

const styles = StyleSheet.create({
	mainContainer:{
		backgroundColor:"#FFFFFF",
		flex:1,
		padding:30,
		justifyContent:"space-evenly"
	},
	input:{
		borderBottomWidth:1,
		borderBottomColor:"#A9A9A9",
		flexDirection:"row",
		justifyContent:"space-between",
		borderBottomWidth:1
	}
})

const MyTagInput = (prop) => (
	<Tags
	  initialText="Add Tag"
	  textInputProps={{
		placeholder: "Any type of animal"
	  }}
	  initialTags={["dog", "cat", "chicken","rat","bou","bos","prooost","pooorc"]}
	  onChangeTags={prop.onChangeTags}
	  //onChangeTags={tags => console.log(tags)}

	 /* 
	  onTagPress={(index, tagLabel, event, deleted) =>
		console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
	  }
	  */
	  containerStyle={{}}
	  inputContainerStyle={{flex:0,height:35,backgroundColor: "#D3D3D3",borderRadius:10}}
	  inputStyle={{}}
	  renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
		<TouchableOpacity key={`${tag}-${index}`} onPress={onPress} style={{height:35,backgroundColor:"red",borderRadius:10,marginHorizontal:5,justifyContent:"center",padding:10}}>
		  <Text>{tag}</Text>
		</TouchableOpacity>
	  )}
	/>
  );

export default PostPage;