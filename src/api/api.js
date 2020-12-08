const apiURL = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';

const getResultAPI = () => {
    return fetch(apiURL);
}

export { getResultAPI }