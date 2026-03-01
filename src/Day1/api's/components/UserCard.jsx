const UserCard = ({ user, onPromote }) => {
    const { id, name, role } = user;
    const isPromoted = role === "Senior";

    return (
        <div className="border rounded-xl p-5 w-60 shadow-sm bg-white flex flex-col gap-3">
            <h2 className="font-semibold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-500">Role: {role}</p>
            <button
                onClick={() => onPromote(id)}
                disabled={isPromoted}
                className={`py-1.5 rounded-lg text-sm font-medium transition-all ${isPromoted
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-indigo-500 text-white hover:bg-indigo-600 cursor-pointer"
                    }`}
            >
                {isPromoted ? "Promoted ✓" : "Promote"}
            </button>
        </div>
    );
};

export default UserCard;