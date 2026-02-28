import UserCard from "@/components/UserCard";
import usersInfo from "@/Data/UsersInfo";
import { promoteUser } from "@/utils/RoleUpdateFn";
import { useState } from "react";
const UserDashboard = () => {

    const [userInfo, setUserInfo] = useState(usersInfo);

    const handlePromote = (userId) => {
        setUserInfo((prevUsers) => promoteUser(prevUsers, userId));
    };
    return (
        <>
            <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    User Dashboard
                </h1>
                <p className="text-gray-500 mb-10 text-sm">
                    Click "Promote" to update a user's role to Senior
                </p>

                <div className="flex flex-wrap gap-6 justify-center">
                    {userInfo.map((user) => (
                        <UserCard
                            key={user.id}
                            user={user}
                            onPromote={handlePromote}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default UserDashboard;