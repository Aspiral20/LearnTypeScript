import React from 'react';
import Card, {cardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";

const App = () => {
    const users: IUser[] = [
        {id: 1, name: 'Ulbi TV', email: 'asf@mail.ru', address: {city: 'Moscow', street: 'Lenina', zipcode: '300' }},
        {id: 2, name: 'Vano', email: 'sda@mail.ru', address: {city: 'Kaleningrad', street: 'Pushkina', zipcode: '123' }}
    ]

    return (
        <div>
            <Card onClick={(num) => {console.log('click', num)}} width={300} height={300} variant={cardVariant.outlined}>
                <button type={"button"}>text</button>
            </Card>
            <UserList users={users}/>
        </div>
    );
};

export default App;