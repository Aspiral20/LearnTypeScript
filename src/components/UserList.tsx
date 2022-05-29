import React, {FC} from 'react';
import {IUser} from "../types/types";
import UserItem from "./UserItem";

interface UserListProps {
    users: IUser[]
}

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <div>
            {/*Map itereaza toate elementele din users*/}
            {users.map(user =>
                <UserItem key={user.id} user={user}/>
            )}
        </div>
    );
};

export default UserList;