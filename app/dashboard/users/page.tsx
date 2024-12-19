import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { getUsers } from "@/utils/helper";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Users</h1>
      {users.length > 0 ? (
        <DataTable columns={columns} data={users} />
      ) : (
        <div>
            <h3 className="text-2xl font font-normal">No users joined us till now !</h3>
        </div>
      )}
    </div>
  );
}
