import * as React from "react";
import { Button, Text } from "react-native";
import { FlexCenter } from "../components/layout";

interface Props {
  resetState: () => void;
}

function FallbackScreen({ resetState }: Props) {
  return (
    <FlexCenter>
      <Text>Fallback screen</Text>
      <Button title="Go home" onPress={resetState} />
    </FlexCenter>
  );
}

export default FallbackScreen;
