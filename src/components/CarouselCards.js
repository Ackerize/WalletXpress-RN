import React from 'react';
import {
	StyleSheet,
	View,
	Dimensions,
	TouchableWithoutFeedback,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CreditCard from './CreditCard';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = Math.round(width * 0.7);

const CarouselCards = ({ data }) => {
	return (
		<Carousel
			layout={'default'}
			data={data}
			renderItem={item => <RenderItem data={item} />}
			sliderWidth={width}
			itemWidth={ITEM_WIDTH}
		/>
	);
};

const RenderItem = ({ data }) => {
	const { name, balance, bgColor } = data.item;
	return (
		<TouchableWithoutFeedback>
			<View style={styles.card}>
				<CreditCard name={name} balance={`$ ${balance}`} bgColor={bgColor} />
			</View>
		</TouchableWithoutFeedback>
	);
};

export default CarouselCards;

const styles = StyleSheet.create({
	card: {
		marginTop: 15,
	},
});
