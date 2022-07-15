export interface HomeState {
  data: [{}];
  pages: object;
  isLoading: boolean;
  Status: string;
}

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
