import axios from 'axios';

export const fetchData = async (url: string, method: string) => {
  return axios.request({
    method,
    url,
  });
};
