import React from "react";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacerComponent";
import { Text } from "../../../components/typography/textComponents";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
	RestaurantCard,
	RestaurantCardCover,
	Info,
	Section,
	SectionEnd,
	Rating,
	Icon,
	Address,
} from "./restaurantInfoCardStyle";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
	const {
		name = "Some Restaurant",
		icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
		photos = [
			"https://www.foodiesfeed.com/free-food-photo/eating-beef-burger-with-french-fries-outside/download/799e5a5685/",
		],
		address = "100 some random street",
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily = true,
	} = restaurant;

	const ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		<RestaurantCard elevation={5}>
			<RestaurantCardCover key={name} source={{ uri: photos[0] }} />
			<Info>
				<Text variant="label">{name}</Text>
				<Section>
					<Rating>
						{ratingArray.map((_, i) => (
							<SvgXml xml={star} width={20} height={20} />
						))}
					</Rating>
					<SectionEnd>
						{isClosedTemporarily && (
							<Text variant="error">CLOSED TEMPORARILY</Text>
						)}
						<Spacer position="left" size="large">
							{isOpenNow && <SvgXml xml={open} width={20} height={20} />}
						</Spacer>
						<Spacer position="left" size="large">
							<Icon source={{ uri: icon }} />
						</Spacer>
					</SectionEnd>
				</Section>
				<Address>{address}</Address>
			</Info>
		</RestaurantCard>
	);
};
