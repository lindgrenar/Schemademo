import { Datagrid, List, TextField, UrlField, NumberField, } from 'react-admin';

export const CoursesList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='shortName' />
      <TextField source='school' />
      <UrlField source='blog' />
      <NumberField source='hide' />
      <TextField source='defaultStart' />
      <TextField source='defaultEnd' />
      <NumberField source='defaultInvoiceItem' />
      <TextField source='defaultHoursPerDay' />
    </Datagrid>
  </List>
);