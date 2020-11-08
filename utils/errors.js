export const generateErrorContent = (errorMessage) => {
  if (errorMessage.includes("204")) {
    return STATUS_204;
  }
  if (errorMessage.includes("404")) {
    return STATUS_404;
  }
  return "BAD REQUEST";
};

export const STATUS_204 =
  "There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.";
export const STATUS_404 =
  "The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist.";
