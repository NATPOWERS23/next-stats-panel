export enum ROLE {
  admin = 0,
  channel_owner = 1,
  member = 2,
  unauthenticated = 3,
}

export const roleList = [
  'org:admin',
  'org:channel_owner',
  'org:member',
  'org:unauthenticated',
]

export const authenticatedRoles = [
  'org:admin',
  'org:channel_owner',
  'org:member',
]