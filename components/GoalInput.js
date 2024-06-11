import { StyleSheet } from "react-native";
import { View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";
function GoalInput(props) {
	const [enteredGoalText, setEnteredGoalText] = useState("");

	function goalInputHandler(text) {
		setEnteredGoalText(text);
	}

	function addGoalHandler() {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText("");
	}
	return (
		<Modal visible={props.visible} animationType="fade">
			<View style={styles.inputContainer}>
				<Image style={styles.image} source={require('../assets/images/goal.png')} />
				<TextInput
					placeholder="Your Course Goal"
					style={styles.textInput}
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={addGoalHandler} color={"#b180f0"} />
					</View>
					<View style={styles.button}>
						<Button onPress={props.hide} title="Cancel" color={"#f31082"} />
					</View>
				</View>
			</View>
		</Modal>
	);
}

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#311b6b"
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		color: "#120438",
		width: "100%",
		marginRight: 8,
		padding: 8,
		borderRadius: 6,
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: "row",
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
});
