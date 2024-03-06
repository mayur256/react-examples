import { Box, TextField } from "@mui/material";
import Select from 'react-select'

import { CustomPaginate } from "./CustomPaginate";
import { CustomTable } from "./CustomTable";

export default function App() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <Box>
            <h1>Pagination Worker example</h1>
            <Box sx={{ display: 'flex', marginBottom: 1, justifyContent: 'flex-end' }}>
                <TextField label="Search" variant="standard" />
                <Select placeholder="Sort" options={options} />
            </Box>
            <CustomTable />
            <CustomPaginate />
        </Box>
    )
}
