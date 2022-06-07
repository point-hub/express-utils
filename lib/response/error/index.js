export const responseError = (code, message, info) => {
    const response = {
        code: code,
        message: message,
    };
    if (info)
        response.info = info;
    return response;
};
