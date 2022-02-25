import React , {useState} from "react";
import {StyleSheet,View,Text,TextInput,Switch,TouchableOpacity,Button,Modal} from "react-native"
import Tags from "react-native-tags";
import DateTimePicker from '@react-native-community/datetimepicker'

function PostPage (props) {

	console.log(props)

	const [name, onChangeName] = useState("")
	const [date,setDate] = useState(new Date())
	const [mode,setMode] = useState('date')
	const [show,setShow] = useState(false)
	const [text,setText] = useState({date:"",startingTime:"",endingTime:""})

	const [modal,setModal] = useState(true)

	const [isEnabled, setIsEnabled] = useState(false);
  	const toggleSwitch = () => setIsEnabled(previousState => !previousState);

	const onChange = (event , selectedDate) => {
		const currentDate = selectedDate || date;
		setShow(Platform.OS === 'ios');
		setDate(currentDate);

		let tempDate = new Date(currentDate);

		/// if mode
		let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
		let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();

		console.log(fDate ,fTime)

		setText( (previousState) => (mode === "date" ? { date : fDate , startingTime : previousState.startingTime } : { date : previousState.date , startingTime : fTime} ) )
	}

	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	}

	return (
		modal && (
		<Modal>
			<View style={styles.mainContainer}>
					<TouchableOpacity style={{ backgroundColor:"yellow",width:80 }} onPress={() => {props.navigation.navigate("Home");setModal(false);console.log("am incercat sa es")}}>
						<Text>Close</Text>
					</TouchableOpacity>
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
					<MyTagInput/>
					

					< Button title = "Create Task" color = "#841584" borderRadius={30} />
					{
						show && (
							<DateTimePicker testID="dateTimePicker" value={date} mode={mode} is24Hour={true} display='default' onChange={onChange}/>
						)
					}

			</View>
		</Modal>
		)
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

const MyTagInput = () => (
	<Tags
	  initialText="Add Tag"
	  textInputProps={{
		placeholder: "Any type of animal"
	  }}
	  initialTags={["dog", "cat", "chicken","rat","bou","bos","prooost","pooorc"]}
	  onChangeTags={tags => console.log(tags)}
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