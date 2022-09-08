import * as React from "react";
import { Text } from "react-native";
import { FlexCenter } from "~components/layout";
import { AppSafeAreaView } from "~components/safe-area";
import { RouteNames } from "~navigation/route-names";
import { MovieStackScreenProps } from "~navigation/types";

export default function MovieListScreen({
  navigation,
  route,
}: MovieStackScreenProps<RouteNames.moveList>) {
  return (
    <AppSafeAreaView>
      <FlexCenter>
        <Text>Movie list screen</Text>
        <Text
          onPress={() =>
            navigation.navigate(RouteNames.movieDetail, { movieId: 1 })
          }>
          Go to movie detail screen
        </Text>
      </FlexCenter>
    </AppSafeAreaView>
  );
}
