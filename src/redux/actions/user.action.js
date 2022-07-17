export const getAllUsers = (users) => {
    return {
        type: "getAllUsers",
        payload: users
    }
}