const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

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

const api = route => {
  return fetch(`${API_BASE_URL}${route}`, {
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(checkStatus)
    .then(parseBody)
    .catch(e => {
      console.error(`Request failed for: "${route}". ${e}`);
    });
};

export default api;
