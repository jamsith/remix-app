import { Box, Button, Typography } from "@mui/material";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node"
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';


type Standings = {
    standings: object[]
}

export const loader = async () => {
    const res = await fetch("https://api-web.nhle.com/v1/standings/now");
    return json(await res.json());
}

export default function Nhl() {
    const { standings }: Standings = useLoaderData<typeof loader>();

    const columns: GridColDef[] = [
        {
            field: "teamLogo",
            headerName: 'Team Logo',
            width: 100,
            renderCell: ({ row }: GridRenderCellParams) => <Box component="img" sx={{
                height: 50,
                width: 50,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
            }}
                alt={row.teamLogo}
                src={row.teamLogo} />
        },
        {
            field: "teamName",
            headerName: 'Team Name',
            width: 200,
            renderCell: ({ row }: GridRenderCellParams) => <Typography variant="body1">{row.teamName.default}</Typography>
        },
        {
            field: "teamAbbrev",
            headerName: 'Team Abbreviation',
            width: 200,
            renderCell: ({ row }: GridRenderCellParams) => <Typography variant="body1">{row.teamAbbrev.default}</Typography>
        },
        {
            field: "conferenceName",
            headerName: 'ConferenceName',
            width: 200,
            renderCell: ({ row }: GridRenderCellParams) => <Typography variant="body1">{row.conferenceName}</Typography>
        },
        {
            field: "wins",
            headerName: 'Wins',
            width: 50,
            renderCell: ({ row }: GridRenderCellParams) => <Typography variant="body1">{row.wins}</Typography>
        },
        {
            field: "losses",
            headerName: 'Losses',
            width: 50,
            renderCell: ({ row }: GridRenderCellParams) => <Typography variant="body1">{row.losses}</Typography>
        },
        {
            field: "points",
            headerName: 'Points',
            width: 50,
            renderCell: ({ row }: GridRenderCellParams) => <Typography variant="body1">{row.points}</Typography>
        }
    ]


    return (
        <>
            <Button href="/">Back</Button>
            <Box flexDirection="row">
                <Typography variant="h3" sx={{ pl: '50%' }}>NHL Standings</Typography>
            </Box>
            <Box sx={{ width: '100%', backgroundColor: "white", mx: 2 }}>
                <DataGrid columns={columns} rows={standings} getRowId={row => row.teamAbbrev.default} />
            </Box>
        </>
    )
}