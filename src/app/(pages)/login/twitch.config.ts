const clientId = process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID;
const twitchRedirectUrl = process.env.NEXT_PUBLIC_TWITCH_REDIRECT_URI;
const twitchAuthUrl = 'https://id.twitch.tv/oauth2/authorize';
const twitchScope = 'channel%3Aread%3Agoals+channel%3Aread%3Apolls';
const twitchState = 'c3ab8aa609ea11e793ae92361f002671';
const twitchAuthQueries = `response_type=code&client_id=${clientId}&redirect_uri=${twitchRedirectUrl}&scope=${twitchScope}&state=${twitchState}`;

export const twitchAuthPath = `${twitchAuthUrl}?${twitchAuthQueries}`;
