import { signOutAction } from "@/lib/actions";

export default function SignOutButton() {
    return (
        <form action={signOutAction}>
            <button>Sign Out</button>
        </form>
    );
}