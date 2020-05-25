
const endpoint = 'http://dummy.restapiexample.com/api/v1/';
const headers = {
  'content-type': 'application/json',
};

const Api = {
  get: (route) => fetch(`${endpoint}${route}`, { method: 'GET' })
    .then((response) => response.json()),
  post: (route, data) => fetch(`${endpoint}${route}`, { method: 'POST', headers, body: data })
    .then((response) => response.json()),
  delete: (route, id) => fetch(`${endpoint}${route}/${id}`, { method: 'DELETE', headers })
    .then((response) => response.json()),
};

export default Api;
