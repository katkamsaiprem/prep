export const promoteUser = (users, userId) => {
  return users.map((user) =>
    user.id === userId ? { ...user, role: "Senior" } : user
  );
};