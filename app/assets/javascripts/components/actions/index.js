export const selectUser =(user)=>{
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};


export const allUsers = (user) =>{
    console.log('__________________', user)
    return {
        type: 'ALL_USER',
        payload: user
    }
};