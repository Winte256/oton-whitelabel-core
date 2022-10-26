import {config} from "../App";

interface IFetchProps {
  url: string;
  data: {
    auth?: string;
    [key: string]: any;
  }
}

const defaultOptions = {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer', // no-referrer, *client
};

const commonFetch = async ({url, data}: IFetchProps) => {
  const baseUrl = config.env.apiUrl || '';

  const response = await fetch(baseUrl + url, {
    ...defaultOptions,
    ...(defaultOptions.method === 'POST' && {body: JSON.stringify(data)})
  } as RequestInit);

  return await response.json();
}

const fetcher = (args: IFetchProps) => {
  return commonFetch(args).then(res => res);
}

export default fetcher;