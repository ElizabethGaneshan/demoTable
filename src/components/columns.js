// export const GROUPED_COLUMNS = [
//   {
//     Header: "Id",
//     Footer: "Id",
//     accessor: "id",
//   },
//   {
//     Header: "Name",
//     Footer: "Name",
//     columns: [
//       {
//         Header: "First Name",
//         accessor: "first_name",
//         Footer: "First Name",
//       },
//       {
//         Header: "Last Name",
//         accessor: "last_name",
//         Footer: "Last Name",
//       },
//     ],
//   },

import { ColumnFilter } from "./ColumnFilter";

//   {
//     Header: "Info",
//     Footer: "Info",
//     columns: [
//       {
//         Header: "Date of Birth",
//         accessor: "date_of_birth",
//         Footer: "Date of Birth",
//       },
//       {
//         Header: "Country",
//         accessor: "country",
//         Footer: "Country",
//       },
//       {
//         Header: "Phone",
//         accessor: "phone",
//         Footer: "Phone",
//       },
//     ],
//   },
// ];

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    disableFilters: true,
  },
  {
    Header: "First Name",
    accessor: "first_name",
    Footer: "First Name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    Footer: "Last Name",
  },
  {
    Header: "Date of Birth",
    accessor: "date_of_birth",
    Footer: "Date of Birth",
  },
  {
    Header: "Country",
    accessor: "country",
    Footer: "Country",
  },
  {
    Header: "Phone",
    accessor: "phone",
    Footer: "Phone",
  },
];
