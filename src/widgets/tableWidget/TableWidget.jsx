import { tableHeaders } from "./config/tableHeaders";
import { Table, ModalWindow } from '../../shared/ui';
import PropTypes from "prop-types";
import { useState } from "react";

const TableWidget = ({ users, handleSetUsers }) => {

  const [selectUser, setSelectUser] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleSelectUser = (user) => {
    console.log(user);
    setSelectUser(user);
    setIsOpenModal(prev => !prev)
  }

  const handleToggleIsOpenModal = () => {
    setIsOpenModal(prev => !prev)
  }


  return (
    <>
      {users == null ? "not found" :
        <>
          <Table
            headers={tableHeaders}
            minCellWidth={50}
            tableContent={users}
            handleSelectUser={handleSelectUser}
            handleSetUsers={handleSetUsers}
          />
          <ModalWindow
            user={selectUser}
            isActive={isOpenModal}
            onClick={handleToggleIsOpenModal} />
        </>}
    </>
  )
}

TableWidget.propTypes = {
  users: PropTypes.array,
  handleSetUsers: PropTypes.func
};

export default TableWidget;

