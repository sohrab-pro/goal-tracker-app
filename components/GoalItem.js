import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";
function GoalItem(props) {
	return (
		<View style={styles.goalStyle}>
			<Pressable 
				android_ripple={{ color: '#210644'}}
				style={({pressed}) => pressed && styles.pressedItem}
				onPress={props.onDeleteGoal.bind(this, props.id)}>
				<Text style={{ color: "white" }}>{props.text}</Text>
			</Pressable>
		</View>
	);
}

export default GoalItem;

const styles = StyleSheet.create({
	goalStyle: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	pressedItem: {
		opacity: 0.5,
	}
});
