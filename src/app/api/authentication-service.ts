import { apiClient } from './api-client';
import { AxiosResponse } from 'axios';

export const executeJwtAuthenticationService = (
  username: string,
  password: string ): Promise<AxiosResponse> => {
            const requestBody = {
                username: username,
                password: password
              };
            return apiClient.post('/authenticate', requestBody);
          };
