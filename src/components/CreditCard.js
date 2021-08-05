import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const circleSize = 250;
export default function CreditCard({
	name,
	balance,
	textColor = 'white',
	bgColor = '#0047cc',
}) {
	return (
		<View style={[s.container, { backgroundColor: bgColor }]}>
			<View style={[s.bgCircle, s.rightBgCircle]} />
			<View style={[s.bgCircle, s.bottomBgCircle]} />
			<View style={s.cardNumberContainer}>
				<Text style={[s.text, { color: textColor }]}>{name}</Text>
			</View>
			<View style={s.footerContainer}>
				<Text style={[s.text, { color: textColor }]}>{balance}</Text>
				<View style={s.logoContainer}>
					<View style={[s.circle, s.leftCircle,]} />
					<View style={[s.circle, s.rightCircle]} />
				</View>
			</View>
		</View>
	);
}

const s = StyleSheet.create({
	container: {
		padding: 24,
		paddingTop: 40,
		borderRadius: 12,
		width: 290,
		position: 'relative',
	},
	logoContainer: { position: 'relative', marginTop: 24 },
	circle: { width: 34, height: 34, borderRadius: 17 },
	rightCircle: { backgroundColor: '#FFFFFF', position: 'absolute', right: 20 },
	leftCircle: { backgroundColor: '#F2F2F2',  zIndex: 999, opacity: 0.6 },
	cardNumberContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 18,
	},
	cardNumberPart: { flexDirection: 'row' },
	dot: {
		width: 6,
		height: 6,
		borderRadius: 3,
		marginRight: 4,
	},
	footerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	text: {
		fontFamily: 'Rubik-SemiBold',
		fontSize: 16,
		letterSpacing: 0.53,
	},
	bgCircle: {
		position: 'absolute',
		backgroundColor: 'white',
		opacity: 0.05,
		height: circleSize,
		width: circleSize,
		borderRadius: circleSize,
	},
	rightBgCircle: {
		top: (-1 * circleSize) / 4,
		right: (-1 * circleSize) / 2,
	},
	bottomBgCircle: {
		bottom: (-1 * circleSize) / 2,
		left: (0 * (-1 * circleSize)) / 2,
	},
});
