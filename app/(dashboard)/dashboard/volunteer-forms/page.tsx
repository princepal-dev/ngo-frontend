import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { getVolunteerForms } from "@/utils/helper";

export default async function VolunteerFormsPage() {
  const volunteerForms = await getVolunteerForms();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Volunteer Forms</h1>
      {volunteerForms.length > 0 ? (
        <DataTable columns={columns} data={volunteerForms} />
      ) : (
        <div>
          <h3 className="text-2xl font font-normal">
            No one applied as a volunteer yet !
          </h3>
        </div>
      )}
    </div>
  );
}
