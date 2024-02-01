import React from 'react';

const UserList = (props) => {
    const {user, removeUser} = props
    const userList = user.map((val) => {
        return(
            <div>
                <div>{val.name}</div>
                <div>{val.email}</div>
                <span><button onClick={() => removeUser(val.id)}>Delete</button></span>
            </div>
        )
    })
    return (
        <>
        <div>Contact list</div>
        <div>{userList}</div>
        </>
    );
};

export default UserList;