import { Datagrid, List, TextField, NumberField, BooleanField, EditButton, Edit } from 'react-admin';

export const CourseList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" reference="courses" />
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

export const CourseEdit = () => (
  <Edit>
    <Datagrid>
      <TextField source="id" reference="courses" />
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

export const CourseCreate = props => (
  <Create {...props} >
    <SimpleForm>
      <TextField source="id" reference="courses" />
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
    </SimpleForm >
  </Create >
);
