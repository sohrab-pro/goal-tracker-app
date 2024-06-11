import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [goals, setGoals] = useState([]);
	const [modalVisible, SetModalVisible] = useState(false);

	function startAddGoalHandler() {
		SetModalVisible(true);
	}

	function closeModal() {
		SetModalVisible(false);
	}

	function addGoalHandler(enteredGoalText) {
		setGoals((currentGoals) => [
			...currentGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
		SetModalVisible(false);
	}

	function deleteGoal(id) {
		setGoals((goals) => {
			return goals.filter((item) => {
				return id !== item.id;
			});
		});
	}
	return (
		<>
		<StatusBar style="auto" />
		<View style={styles.appContainer}>
			<Button
				title="Add Goal"
				color={"#5e0acc"}
				onPress={startAddGoalHandler}
			/>
			{modalVisible && <GoalInput hide={closeModal} visible={modalVisible} onAddGoal={addGoalHandler} />}
			<View style={styles.goalsContainer}>
				<FlatList
					data={goals}
					renderItem={(itemData) => {
						return (
							<GoalItem
								text={itemData.item.text}
								id={itemData.item.id}
								onDeleteGoal={deleteGoal}
							/>
						);
					}}
					keyExtractor={(item, index) => {
						return item.id;
					}}
				/>
			</View>
		</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 35,
	},
	goalsContainer: {
		flex: 5,
	},
});
