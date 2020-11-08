export const requestMiddleware = (response) => {
  const { data, status } = response;
  if (status === 200) {
    return data;
  }
  if (status === 204) {
    return status;
  }
};
