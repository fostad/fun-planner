export const handleResponse = response => {
  return Promise.resolve()
    .then(() => {
      if(response.status === 404)
        return Promise.resolve();

      if(response.status > 400) {
        return Promise.reject(response);
      }

      return response.json();
    })
    .catch(e => console.log(e));
};
