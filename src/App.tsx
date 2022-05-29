import React, {useEffect, useState} from 'react';
import Card, {cardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);

    //Pentru a obtine datele de la inceputul deschiderii paginii web
    useEffect(() => {
        fetchUsers()
        fetchTodos()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }


    // const users: IUser[] = [
    //     {id: 1, name: 'Ulbi TV', email: 'asf@mail.ru', address: {city: 'Moscow', street: 'Lenina', zipcode: '300' }},
    //     {id: 2, name: 'Vano', email: 'sda@mail.ru', address: {city: 'Kaleningrad', street: 'Pushkina', zipcode: '123' }}
    // ]
    return (
        <div>
            <EventsExample/>
            <Card onClick={(num) => {console.log('click', num)}} width={300} height={300} variant={cardVariant.outlined}>
                <button type={"button"}>text</button>
            </Card>
            {/*<UserList users={users}/>*/}
            <List
                items={users}
                renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
            />
            <List
                items={todos}
                renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
            />
        </div>
    );
};

export default App;