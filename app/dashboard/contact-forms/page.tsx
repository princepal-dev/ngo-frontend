import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { getContactForms } from "@/utils/helper";

export default async function ContactFormsPage() {
  const contactForms = await getContactForms();
  console.log(contactForms);

    return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Contact Forms</h1>
      {contactForms.length > 0 ? (
        <DataTable columns={columns} data={contactForms} />
      ) : (
        <div>
          <h3 className="text-2xl font font-normal">No one contact us !</h3>
        </div>
      )}
    </div>
  );
}
