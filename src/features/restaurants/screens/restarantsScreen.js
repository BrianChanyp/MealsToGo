import React from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurantInfoCardComponent";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safeAreaComponent";

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;
export const RestaurantScreen = () => (
	<SafeArea>
		<SearchContainer>
			<Searchbar />
		</SearchContainer>
		<RestaurantList
			data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
			renderItem={() => <RestaurantInfoCard />}
			keyExtractor={(item) => item.name}
		/>
	</SafeArea>
);
