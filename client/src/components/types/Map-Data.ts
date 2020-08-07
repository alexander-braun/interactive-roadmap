export type Node = {
  comments: string[];
  title: string;
  goalDate: number;
  status: 'Pending' | 'In-Work' | 'Done';
  recommended?: 'option' | 'recommended' | 'not-recommended' | 'own';
  children: string[];
  mainKnot?: boolean;
  resources?: string[];
  importance?: number;
};

export interface Nodes {
  [key: string]: Node;
}
