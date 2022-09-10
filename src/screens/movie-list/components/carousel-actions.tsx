import * as React from "react";
import { Switch } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { GenericView } from "~components/layout";
import { styled, theme } from "~theme";
import { CATEGORY_COUNT_OPTIONS } from "../constants";

type Props = {
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCategoryCountToDisplay: React.Dispatch<React.SetStateAction<number>>;
  setAutoPlay: React.Dispatch<React.SetStateAction<boolean>>;
  autoPlay: boolean;
  isDropdownOpen: boolean;
  categoryCountToDisplay: number;
};

export default function CarouselActions({
  isDropdownOpen,
  setCategoryCountToDisplay,
  categoryCountToDisplay,
  setDropdownOpen,
  setAutoPlay,
  autoPlay,
}: Props) {
  return (
    <>
      <GenericView
        backgroundColor={theme.colors.background}
        flexDirection="row"
        alignItems="center">
        <DropdownText>Carousels auto play enabled</DropdownText>

        <Switch
          value={autoPlay}
          onChange={() => setAutoPlay((prev) => !prev)}
        />
      </GenericView>
      <DropdownText>Category count to display</DropdownText>
      <DropDownPicker
        open={isDropdownOpen}
        value={categoryCountToDisplay}
        labelStyle={{ ...theme.fonts.p2 }}
        items={CATEGORY_COUNT_OPTIONS}
        setOpen={setDropdownOpen}
        setValue={setCategoryCountToDisplay}
      />
    </>
  );
}

const DropdownText = styled.Text`
  color: ${({ theme: { colors } }) => colors.textDark};
  font-size: ${({ theme: { fonts } }) => fonts.p2.fontSize}px;
  font-weight: ${({ theme: { fonts } }) => fonts.p2.fontWeight};
  font-family: ${({ theme: { fonts } }) => fonts.p2.fontFamily};
  margin-bottom: 8px;
  padding-top: 16px;
`;
