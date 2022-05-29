import React, {FC, useState} from 'react';

interface EventsExampleProps {

}

const EventsExample: FC<EventsExampleProps> = () => {

    const [value, setValue] = useState<string>('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text"/>
            <button onClick={clickHandler}>LOG</button>
        </div>
    );
};

export default EventsExample;