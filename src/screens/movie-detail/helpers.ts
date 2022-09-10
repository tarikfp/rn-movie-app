import { IconProps } from "@tarikfp/react-native-utils";
import { ms } from "react-native-size-matters";
import { theme } from "~theme";

/**
 *
 * @description
 * renders different bookmark icon based on category
 */
export const getBookmarkIconByCategory = (
  category: string,
  isInWishList: boolean,
): IconProps => {
  switch (category) {
    case "action":
      return isInWishList
        ? {
            name: "cards-heart",
            type: "MaterialCommunityIcons",
            size: ms(32),
            color: theme.colors.primary,
          }
        : {
            name: "cards-heart-outline",
            type: "MaterialCommunityIcons",
            size: ms(32),
            color: theme.colors.textLight,
          };

    case "adventure":
      return isInWishList
        ? {
            name: "bookmark-plus-outline",
            type: "MaterialCommunityIcons",
            size: ms(32),
            color: theme.colors.primary,
          }
        : {
            name: "bookmark-remove-outline",
            type: "MaterialCommunityIcons",
            size: ms(32),
            color: theme.colors.textLight,
          };

    case "animation":
      return isInWishList
        ? {
            name: "bookmark-check-outline",
            type: "MaterialCommunityIcons",
            size: ms(32),
            color: theme.colors.primary,
          }
        : {
            name: "bookmark-minus",
            type: "MaterialCommunityIcons",
            size: ms(32),
            color: theme.colors.textLight,
          };

    default:
      return isInWishList
        ? {
            name: "bookmark-plus",
            type: "MaterialCommunityIcons",
            size: ms(32),
            color: theme.colors.primary,
          }
        : {
            name: "bookmark-remove",
            type: "MaterialCommunityIcons",
            size: ms(32),
            color: theme.colors.textLight,
          };
  }
};
