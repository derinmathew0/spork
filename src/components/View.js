import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@material-ui/core";
import  todos  from "../todos.json";
export default function View() {
    console.log('todos::',todos)
  return (
    <Paper style={{ overflowX: "auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>User Id</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
           {todos.map((item,index) => (
            <TableRow>
              <TableCell>
                {item.id}
              </TableCell>
              <TableCell> {item.title}</TableCell>
              <TableCell> {item.completed?'Completed':'Pending'}</TableCell>
              <TableCell> {item.userId}</TableCell>
              <TableCell />
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </Paper>
  );
}
