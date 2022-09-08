import React from "react";
import { Text, View } from "react-native";
import { AppSafeAreaView } from "~components/safe-area";
import { RouteNames } from "~navigation/route-names";
import { MovieStackScreenProps } from "~navigation/types";

export default function MovieDetailScreen({
  navigation,
  route,
}: MovieStackScreenProps<RouteNames.movieDetail>) {
  return (
    <AppSafeAreaView>
      <View>
        <Text>Movie detail screen</Text>
        <Text onPress={() => navigation.goBack()}>Go back</Text>
      </View>
    </AppSafeAreaView>
  );
}
