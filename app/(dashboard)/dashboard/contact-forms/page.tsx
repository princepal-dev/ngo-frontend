import { DataTable } from "@/components/ui/data-table"
import { columns } from './columns'

async function getContactForms() {
    return [
        {
            id: '1',
            name: 'John Smith',
            email: 'john@example.com',
            subject: 'General Inquiry',
            submissionDate: '2023-05-15',
            status: 'New',
        },
        {
            id: '2',
            name: 'Emma Brown',
            email: 'emma@example.com',
            subject: 'Partnership Opportunity',
            submissionDate: '2023-05-16',
            status: 'Responded',
        },
    ]
}

export default async function ContactFormsPage() {
    const contactForms = await getContactForms()

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Contact Forms</h1>
            <DataTable columns={columns} data={contactForms} />
        </div>
    )
}

