export {};

export type Roles = 'admin' | 'channel_owner' | 'user';

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
}
