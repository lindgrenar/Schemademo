import { Datagrid, List, TextField, NumberField, BooleanField, EditButton, Edit, Create, SimpleForm } from 'react-admin';

export const CoursesList = () => (
  <List>
    <Datagrid>
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
      <EditButton />
    </Datagrid>
  </List>
);

export const CoursesEdit = () => (
  <Edit>
    <Datagrid>
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
      <EditButton />
    </Datagrid>
  </Edit>
);

export const CoursesCreate = props => (
  <Create {...props} >
    <SimpleForm>
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
      <EditButton />
    </SimpleForm>
  </Create>
);