import "./style.scss";
import { useState, useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { SortSwitch } from '../index';
import { createHeaders, sortTableData } from "./model";


const Table = ({ headers, minCellWidth, tableContent, handleSelectUser, handleSetUsers }) => {

  const [tableHeight, setTableHeight] = useState("auto");
  const [activeIndex, setActiveIndex] = useState(null);
  const tableElement = useRef(null);
  const columns = createHeaders(headers);

  const handleSortTableData = (sortBy, typeSort) => {
    const result = sortTableData(tableContent, sortBy, typeSort);
    console.log('sorted array: ', result)
    
    handleSetUsers(result);
  }

  useEffect(() => {
    setTableHeight(tableElement.current.offsetHeight);
  }, []);

  const mouseDown = (index) => {
    setActiveIndex(index);
  };

  const mouseMove = useCallback(
    (e) => {
      const gridColumns = columns.map((col, i) => {
        if (i === activeIndex) {
          const width = e.clientX - col.ref.current.offsetLeft;

          if (width >= minCellWidth) {
            return `${width}px`;
          }
        }
        return `${col.ref.current.offsetWidth}px`;
      });

      tableElement.current.style.gridTemplateColumns = `${gridColumns.join(
        " "
      )}`;
    },
    [activeIndex, columns, minCellWidth]
  );

  const removeListeners = useCallback(() => {
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("mouseup", removeListeners);
  }, [mouseMove]);

  const mouseUp = useCallback(() => {
    setActiveIndex(null);
    removeListeners();
  }, [setActiveIndex, removeListeners]);

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mouseup", mouseUp);
    }

    return () => {
      removeListeners();
    };
  }, [activeIndex, mouseMove, mouseUp, removeListeners]);


  return (
    <div className="table-wrapper">
      <table className="resizeable-table" ref={tableElement}>
        <thead>
          <tr>
            {columns.map(({ ref, text, isSorted, value }, i) => (
              <th ref={ref} key={text}>
                <span>{text}</span>
                {isSorted ?
                  <SortSwitch
                    onClick={handleSortTableData}
                    sortBy={value} /> : ''}
                <div
                  style={{ height: tableHeight }}
                  onMouseDown={() => mouseDown(i)}
                  className={`resize-handle ${activeIndex === i ? "active" : "idle"
                    }`}
                />
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tableContent === undefined ? '' : tableContent.map((user) =>
            <tr key={user.id} onClick={() => handleSelectUser(user)}>
              <td>
                <span>{user.initials}</span>
              </td>
              <td>
                <span>{user.age}</span>
              </td>
              <td>
                <span>{user.gender}</span>
              </td>
              <td>
                <span>{user.phoneNumber}</span>
              </td>
              <td>
                <span>{user.address}</span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div >
  )
}

Table.propTypes = {
  headers: PropTypes.array,
  minCellWidth: PropTypes.number,
  tableContent: PropTypes.array,
  handleSelectUser: PropTypes.func,
  handleSetUsers: PropTypes.func
}

export default Table;
