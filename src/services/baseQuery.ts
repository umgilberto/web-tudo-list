import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query';
import { environment } from '../config/environments';
import { PageContextEnum } from '../features/settings/types';

const setLocalStorageHeaders = (headers: Headers, fields: string[]) => {
  for (const field of fields) {
    const found = localStorage.getItem(field);
    if (found) headers.set(field, `Bearer ${found}`);
  }
};

const setCityHeader = (headers: Headers) => {
  const cityId = localStorage.getItem('cityId');
  if (cityId) headers.set('city', cityId);
};

const tokens = ['Authorization'];

const baseQuery = fetchBaseQuery({
  baseUrl: environment.baseApiUrl,
  prepareHeaders: (headers) => {
    setLocalStorageHeaders(headers, tokens);

    const pageContext = localStorage.getItem('pageContext');

    if (pageContext === PageContextEnum.City) {
      setCityHeader(headers);
    }

    return headers;
  },
});

const apiBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => baseQuery(args, api, extraOptions);

export { apiBaseQuery };
