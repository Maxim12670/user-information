
function filterUserProperties(array) {

  const filterUsers = array.map((user) => ({
    id: user.id,
    initials: `${user.firstName} ${user.lastName} ${user.maidenName}`,
    age: user.age,
    gender: user.gender,
    phoneNumber: user.phone,
    address: `${user.address.city} ${user.address.address}`,
    height: user.height,
    weight: user.weight,
    email: user.email,
  }));

  return filterUsers;
}

export default filterUserProperties;