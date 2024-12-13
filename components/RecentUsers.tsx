import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// @ts-ignore
export function RecentUsers({ totalUsers }) {
    return (
        <div className="space-y-8">
            {totalUsers > 0 ? (
                // @ts-ignore
                totalUsers.map((user, index) => (
                    <div key={index} className="flex items-center">
                        <Avatar className="h-9 w-9">
                            <AvatarImage src={user.avatar} alt="Avatar" />
                            <AvatarFallback>
                                {user.name
                                    .split(" ")
                                    // @ts-ignore
                                    .map((n) => n[0])
                                    .join("")}
                            </AvatarFallback>
                        </Avatar>
                        <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">
                                {user.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {user.email}
                            </p>
                        </div>
                        <div className="ml-auto font-medium">
                            {index === 0 ? "New" : `${index + 1}d ago`}
                        </div>
                    </div>
                ))
            ) : (
                <div>No one joined us yet!</div>
            )}
        </div>
    );
}
