export interface ChannelData {
  channel: Channel;
}

export interface Channel {
  __typename: string;
  goals: Goals;
  id: string;
}

export interface Goals {
  __typename: string;
  edges: Edge[];
  pageInfo: PageInfo;
}

export interface Edge {
  __typename: string;
  cursor: string;
  node: Node;
}

export interface Node {
  __typename: string;
  contributionType: string;
  createdAt: Date;
  currentContributions: number;
  customizations: Customizations;
  description: null;
  id: string;
  state: string;
  targetContributions: number;
}

export interface Customizations {
  __typename: string;
  progressBarAccentColor: string;
  progressBarBackgroundColor: string;
}

export interface PageInfo {
  __typename: string;
  hasNextPage: boolean;
}
