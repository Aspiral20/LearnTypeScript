import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserListProps {
    users: IUser[]
}

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <div>
            {/*Map itereaza toate elementele din users*/}
            {users.map(user =>
                <div key={user.id} style={{padding: 15, border: "1px solid gray"}}>
                    {user.id}. {user.name} traieste in orasul {user.address.city} pe strada {user.address.street}
                </div>
            )}
        </div>
    );
};

export default UserList;