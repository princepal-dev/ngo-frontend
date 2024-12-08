import { DataTable } from "@/components/ui/data-table"
import { columns } from './columns'

async function getUsers() {
    // Fetch data from your API here
    return [
        {
            id: '728ed52f',
            name: 'John Doe',
            email: 'john@example.com',
            role: 'User',
        },
        {
            id: '489e1d42',
            name: 'Jane Smith',
            email: 'jane@example.com',
            role: 'Admin',
        },
        // ... more users
    ]
}

export default async function UsersPage() {
    const users = await getUsers()

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Users</h1>
            <DataTable columns={columns} data={users} />
        </div>
    )
}

