import { Datagrid, List, TextField, UrlField, NumberField, BooleanField, } from 'react-admin';

export const CoursesList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='shortName' />
      <NumberField source='class' />
      <NumberField source='points' />
      <TextField source='startDate' />
      <TextField source='endDate' />
      <TextField source='plan' />
      <NumberField source='invoiceItem' />
      <NumberField source='hoursPerDay' />
      <BooleanField source='hide' />
    </Datagrid>
  </List>
);