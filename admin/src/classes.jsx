import { Datagrid, List, TextField, NumberField, BooleanField, EditButton, Edit } from 'react-admin';

export const ClassesList = () => (
  <List>
    <Datagrid RowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="shortName" />
      <TextField source="school" />
      <TextField source="blog" />
      <TextField source="defaultStartTime" />
      <TextField source="defaultEndTime" />
      <TextField source="defaultlnvoiceTime" />
      <TextField source="defaultHoursPerDay" />
      <EditButton />
      </Datagrid>
  </List>
);

export const ClassesEdit = () => (
  <Edit>
    <Datagrid RowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="shortName" />
      <TextField source="school" />
      <TextField source="blog" />
      <TextField source="defaultStartTime" />
      <TextField source="defaultEndTime" />
      <TextField source="defaultlnvoiceTime" />
      <TextField source="defaultHoursPerDay" />
      <EditButton />
    </Datagrid>
  </Edit>
);