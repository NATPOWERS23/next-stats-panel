export interface User {
  username: string;
  email: string;
  avatar: string;
  role: number;
  twitchId?: [string];
  twitchAccountId?: string;
}

export interface TwitchAccessData {
  _id: string;
  access_token: string;
  refresh_token: string;
  expires_in: number;
  scope: string[];
  token_type: string;
}

export interface TwitchUserData {
  id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
  email: string;
}
