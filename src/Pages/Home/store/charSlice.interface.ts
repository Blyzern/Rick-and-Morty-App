export interface CharState {
  data: [{}];
  info: {};
  link: string;
  isLoading: boolean;
  Status: string;
}

export type InfoTypes = {
  count?: number;
  pages?: number;
  next: string;
  prev: string;
};

export type CharDataTypes = {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: object;
  location: {
    name: string;
    url?: string;
  };
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
};
