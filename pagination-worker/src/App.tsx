import React, { Ref, useEffect, useRef, useState } from "react";

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
    const [loading, setLoading] = useState<boolean>(false);


    const backupUsers = useRef<User[]>([]);
    const workerRef = useRef<Worker | null>(null);

    useEffect(() => {
        fetchUsers();
        workerRef.current = new Worker('worker.js');
        if (workerRef.current?.onmessage === null) {
            workerRef.current.onmessage = (event): void => {
                const messagePayload = event.data;
                setUsers(messagePayload.data);
                setLoading(false)
            }
        }

        return () => workerRef.current?.terminate();
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
        setLoading(true)
        
        workerRef.current?.postMessage({
            type: "sort",
            data: { items: backupUsers.current, newVal }
        });
        
    }

    const onSearchBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
        const searchKey = event.target.value?.trim()?.toLocaleLowerCase();

        setLoading(true);

        if (searchKey) {
            workerRef.current?.postMessage({
                type: "filter",
                data: { items: backupUsers.current, searchKey }
            })
        } else {
            setUsers(backupUsers.current);
            setLoading(false);
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

            <CustomTable users={users} loading={loading} />

            {/* <CustomPaginate /> */}
        </Box>
    )
}
