import { DataTable } from "@/components/ui/data-table"
import { columns } from './columns'

async function getVolunteerForms() {
    return [
        {
            id: '1',
            name: 'Alice Johnson',
            email: 'alice@example.com',
            submissionDate: '2023-05-15',
            status: 'Pending',
        },
        {
            id: '2',
            name: 'Bob Williams',
            email: 'bob@example.com',
            submissionDate: '2023-05-16',
            status: 'Approved',
        },
    ]
}

export default async function VolunteerFormsPage() {
    const volunteerForms = await getVolunteerForms()

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Volunteer Forms</h1>
            <DataTable columns={columns} data={volunteerForms} />
        </div>
    )
}

