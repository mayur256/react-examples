import React, { useEffect, useRef, useState } from "react";

import { Box, TextField } from "@mui/material";
import Select, { SingleValue } from 'react-select'

import { faker } from '@faker-js/faker';

// import { CustomPaginate } from "./CustomPaginate";
import { CustomTable } from "./CustomTable";
import { User } from "./types";

export default function App() {
    const options = [
        { value: 'name', label: 'Name' },
        { value: 'phone', label: 'Phone' },
        { value: 'email', label: 'Email' },
        { value: 'age', label: 'Age' },
        { value: 'zodiac', label: 'Zodiac' }
    ];

    const [users, setUsers] = useState<User[]>([]);
    const backupUsers = useRef<User[]>([]);

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = () => {
        const dummyUsers: User[] = [];
        const max = 1000;
        for (let i = 0; i < max; i++) {
            const user: User = {
                name: faker.person.fullName(),
                phone: faker.phone.number(),
                email: faker.internet.email(),
                address: faker.location.streetAddress(),
                age: faker.number.int({ min: 18, max: 100 }),
                zodiac: faker.person.zodiacSign()
            }

            dummyUsers.push(user);
        }
        backupUsers.current = dummyUsers;
        setUsers(dummyUsers)
    }

    const onSortSelect = async (newVal: SingleValue<{ value: string, label: string }>): Promise<void> => {
        if (!newVal) return;
        
        await new Promise(resolve => setTimeout(resolve, 1000))
        const sortedUsers = backupUsers.current.toSorted((a: User, b: User): number => {
            if (newVal.value === "age") {
                return a.age - b.age;
            }

            const key = newVal.value as keyof Omit<User, 'age'>;

            return a[key].localeCompare(b[key], 'en')
        });

        setUsers(sortedUsers)
    }

    const onSearchBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const searchKey = event.target.value?.trim()?.toLocaleLowerCase();
        if (searchKey) {
            const filteredUsers = backupUsers.current.filter((user: User): boolean => {
                return (user.name.toLocaleLowerCase().includes(searchKey)
                    || user.email.toLocaleLowerCase().includes(searchKey)
                    || user.address.toLocaleLowerCase().includes(searchKey)
                    || user.zodiac.toLocaleLowerCase().includes(searchKey)
                )
            })
            setUsers(filteredUsers)
        } else {
            setUsers(backupUsers.current);
        }
    }


    // main renderer
    return (
        <Box>
            <h1>Pagination Worker example</h1>
            <Box sx={{ display: 'flex', marginBottom: 1, justifyContent: 'flex-end' }}>
                <TextField label="Search" variant="standard" onBlur={onSearchBlur} />
                <Select placeholder="Sort" options={options} onChange={onSortSelect} />
            </Box>

            <CustomTable users={users} />

            {/* <CustomPaginate /> */}
        </Box>
    )
}
