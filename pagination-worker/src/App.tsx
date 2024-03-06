import { Box, } from "@mui/material";
import { CustomPaginate } from "./CustomPaginate";
import { CustomTable } from "./CustomTable";

export default function App() {
    return (
        <Box>
            <h1>Pagination Worker example</h1>
            <CustomTable />
            <CustomPaginate />
        </Box>
    )
}
