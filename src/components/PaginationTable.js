import { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import "./Basictable.css";

export const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable({ columns, data }, usePagination);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups, // a group of headers
    page,
    nextPage, // helper function that react-table is giving us to navigating across different pages.
    previousPage, // helper function that react-table is giving us to navigating across different pages.
    prepareRow,
  } = tableInstance;
    return (
      <>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroups) => (
              <tr {...headerGroups.getHeaderGroupProps()}>
                {headerGroups.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? "down"
                          : "up"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")} </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
            </table>
            
            <div>
                <button onClick={() => previousPage()}>Previous</button>
                <button onClick={()=> nextPage()}>Next</button>
            </div>
      </>
    );
};
