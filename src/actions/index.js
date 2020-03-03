import axios from 'axios';


const ROOT_URL =  'https://api.case.law/v1/cases/?search='

export const FETCH_CASES = 'FETCH_CASES';


export function fetchCases (search) {
  const url = `${ROOT_URL}${search}&ordering=-decision_date`;
  const request = axios.get(url);

  console.log('Request', request);

  return {
    type: FETCH_CASES,
    payload: request
  };
}


