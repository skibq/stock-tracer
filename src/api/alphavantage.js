import axios from 'axios'

export const getCompanyBySymbol = (query) => {
  return axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${query}&apikey=27AJ77PBRU1L8M1E`);
};
