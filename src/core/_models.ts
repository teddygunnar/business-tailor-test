import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  OnBoarding: undefined;
  BusinessForm: undefined;
  Login: undefined;
  FavoriteContent: undefined;
};

export type OnBoardingProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export type LoginProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export type FavoriteContentProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};
