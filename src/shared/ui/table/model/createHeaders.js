import { useRef } from 'react';

export const createHeaders = (headers) => {
  return headers.map((item) => ({
    text: item.title,
    isSorted: item.isSorted,
    value: item.value,
    ref: useRef()
  }));
};