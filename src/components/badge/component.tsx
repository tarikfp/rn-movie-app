import * as React from "react";
import { styled } from "~theme";

type Props = {
  label: string;
};

export default function Badge({ label }: Props) {
  return (
    <BadgeContainer>
      <BadgeText>{label}</BadgeText>
    </BadgeContainer>
  );
}

const BadgeContainer = styled.View`
  border-radius: 16px;
  height: 24px;
  min-width: 105px;
  margin-right: 6px;
  margin-top: 6px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.primary};
`;

const BadgeText = styled.Text`
  background-color: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.paper};
  font-weight: ${({ theme: { fonts } }) => fonts.p3.fontWeight};
  font-size: ${({ theme: { fonts } }) => fonts.p3.fontSize}px;
  font-family: ${({ theme: { fonts } }) => fonts.p3.fontFamily};
`;
