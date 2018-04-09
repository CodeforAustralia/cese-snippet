const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const DEBUG_API_DELAY = process.env.REACT_APP_DEBUG_API_DELAY;

export const checkStatus = response => {
  if (!response.ok) {
    throw new Error();
  }
  return response;
};

export const parseBody = response => {
  // Assumes response has 'Content-Type': 'application/json'
  return response.json();
};

const delay = (resp) => {
  if (typeof DEBUG_API_DELAY === 'undefined' || DEBUG_API_DELAY === false) {
    return resp;
  }
  return new Promise(resolve => setTimeout(resolve, DEBUG_API_DELAY)).then(() => resp);
};

const api = (route, opts = {}) => {
  const options = {
    credentials: 'same-origin',
    headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
    },
    ...opts
  };
  return fetch(`${API_BASE_URL}${route}`, options)
    .then(checkStatus)
    .then(parseBody)
    .then(delay)
    .catch(() => {
      if (process.env.NODE_ENV !== 'test') {
        console.warn(`Request failed for: "${route}". Continuing.`);
      }
      if (process.env.NODE_ENV === 'development') {
        console.error(`Request failed for: "${route}".`);
      }
    });
};

export default api;

