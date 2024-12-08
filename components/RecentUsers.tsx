import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentUsers() {
    const users = [
        { name: "Olivia Martin", email: "olivia.martin@email.com", avatar: "/avatars/01.png" },
        { name: "Jackson Lee", email: "jackson.lee@email.com", avatar: "/avatars/02.png" },
        { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", avatar: "/avatars/03.png" },
        { name: "William Kim", email: "william.kim@email.com", avatar: "/avatars/04.png" },
        { name: "Sofia Davis", email: "sofia.davis@email.com", avatar: "/avatars/05.png" },
    ]

    return (
        <div className="space-y-8">
            {users.map((user, index) => (
                <div key={index} className="flex items-center">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src={user.avatar} alt="Avatar" />
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-sm text-muted-foreground">
                            {user.email}
                        </p>
                    </div>
                    <div className="ml-auto font-medium">
                        {index === 0 ? 'New' : `${index + 1}d ago`}
                    </div>
                </div>
            ))}
        </div>
    )
}

