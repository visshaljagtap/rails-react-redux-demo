export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};


export const allUsers = (user) => {
    return {
        type: 'ALL_USER',
        payload: user
    }
};

export const employeesFetch = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                var action = {
                    type: 'ALL_USERS',
                    payload: json
                }
                dispatch(action)
            })
    };
};
