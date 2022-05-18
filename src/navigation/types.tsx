import { StackNavigationProp } from '@react-navigation/stack';

export type StackScreensParams = {
  Users: undefined;
  UserDetails: { name: string }
}

export type UsersScreenNavigationProp = StackNavigationProp<
  StackScreensParams,
  'Users'
>

export type UserDetailsScreenNavigationProp = StackNavigationProp<
  StackScreensParams,
  'UserDetails'
>
