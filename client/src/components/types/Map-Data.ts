export type Node = {
  children: string[];
  mainKnot?: boolean;
};

export interface Nodes {
  [key: string]: Node;
}
