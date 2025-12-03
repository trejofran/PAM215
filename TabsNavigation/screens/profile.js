import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.iconRow}>
				<Ionicons name="person-outline" size={28} color="green" />
				<Text style={styles.title}> Perfil usuario </Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('Detalle')}
				>
					<Text style={styles.buttonText}>Detalles de Usuario</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	iconRow: {
		flexDirection: 'column',
		alignItems: 'center',
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 10,
		color: 'green',
		marginBottom: 14,
	},
	button: {
		backgroundColor: '#007BFF',
		paddingVertical: 8,
		paddingHorizontal: 14,
		borderRadius: 6,
	},
	buttonText: {
		color: '#fff',
		fontWeight: '600',
	},
});

