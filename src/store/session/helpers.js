export const hasSetSchool = (session, sessionUser) => {
  return session && sessionUser && sessionUser.schools.length;
};
