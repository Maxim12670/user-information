import './style.scss';
import { ContentContainer, MyInput } from '../../shared/ui';
import { TableWidget } from '../../widgets'
import { getAllUsers, getFilterUsers } from '../../shared/api';
import { useEffect, useState } from 'react';


function MainPage() {

  const [users, setUsers] = useState(null);

  async function getUsers() {
    const userData = await getAllUsers();
    if (userData) {
      setUsers(userData);
    }
  }

  const handleSetUsers = (arr) => {
    setUsers([...arr]);
  }

  const handleInputValue = async (e) => {
    const str = e.target.value;
    if (str == 0) {
      await getUsers();
    } else {
      setTimeout(async () => {
        const data = await getFilterUsers(str)
        setUsers(data)
      }, 3000);
    }
  }

  useEffect(() => {
    const fetchUser = async () => {
      await getUsers()
    }

    fetchUser();
  }, [])


  return (
    <ContentContainer>
      <MyInput
        className='input'
        onChange={handleInputValue}
      />
      <button
        className='btn'
        onClick={async() => await getUsers()}
      >Отменить сортировку</button>
      <TableWidget
        users={users}
        handleSetUsers={handleSetUsers} />
    </ContentContainer>
  )
}

export default MainPage;