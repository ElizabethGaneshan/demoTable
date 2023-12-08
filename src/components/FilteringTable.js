import { useMemo } from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import "./Basictable.css";
import { GlobalFilter } from "./GlobalFilter";
import { ColumnFilter } from "./ColumnFilter";

export const FilteringTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const defaultColumn = useMemo(() => {

    // Returning an object property which will be applied in all the column
    return {
      Filter: ColumnFilter,
    };
  }, []);
  //   useTable({ columns: COLUMNS, data: MOCK_DATA });
  //   useTable({ columns: columns, data: data });
  const tableInstance = useTable(
    { columns, data, defaultColumn },
    useFilters,
    useGlobalFilter
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups, // a group of headers,
    footerGroups,
    rows, //on each we access the cells, and from each cell we call the render function passing in the string "cell".It picks the  value from MOCK_JSON data for each column.
    prepareRow,
    state, //Table state
    setGlobalFilter, //function to set the global function value
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
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
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
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
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
};
