interface ResponseInterface {
  code: number;
  message: string;
  info?: object;
}

export const responseError = (code: number, message: string, info?: object) => {
  const response: ResponseInterface = {
    code: code,
    message: message,
  };

  if (info) response.info = info;

  return response;
};
