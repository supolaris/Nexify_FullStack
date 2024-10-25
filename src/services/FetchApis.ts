import axios from 'axios';
import {baseUrl, requestTimeout} from '../utils/Config';

export const GetRequest = async (endpoint: string) => {
  const response = await axios({
    url: `${baseUrl}${endpoint}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${global.token}`,
    },
    timeout: requestTimeout,
  });

  return response;
};

export const PostRequest = async (endpoint: string, data: any) => {
  const response = await axios({
    url: `${baseUrl}${endpoint}`,
    method: 'post',
    headers: {
      Authorization: `Bearer ${global.token}`,
    },
    data,
    timeout: requestTimeout,
  });

  return response;
};

export const PutRequest = async (endpoint: string, data: any) => {
  const response = await axios({
    url: `${baseUrl}${endpoint}`,
    method: 'put',
    headers: {
      Authorization: `Bearer ${global.token}`,
    },
    data,
    timeout: requestTimeout,
  });

  return response;
};

export const DeleteRequest = async (endpoint: string, data: any) => {
  const response = await axios({
    url: `${baseUrl}${endpoint}`,
    method: 'delete',
    headers: {
      Authorization: `Bearer ${global.token}`,
    },
    data,
    timeout: requestTimeout,
  });

  return response;
};
