import * as React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { styled, theme } from "~theme";
import { CATEGORY_COUNT_OPTIONS } from "../constants";

type Props = {
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCategoryCountToDisplay: React.Dispatch<React.SetStateAction<number>>;
  isDropdownOpen: boolean;
  categoryCountToDisplay: number;
};

export default function SelectCategoryCount({
  isDropdownOpen,
  setCategoryCountToDisplay,
  categoryCountToDisplay,
  setDropdownOpen,
}: Props) {
  return (
    <>
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
