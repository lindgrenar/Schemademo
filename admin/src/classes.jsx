import { BooleanField, Datagrid, DateField, List, NumberField, TextField, Edit, Create, SimpleForm } from 'react-admin';

export const ClassList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" reference="classes" />
      <TextField source="name" />
      <TextField source="shortName" />
      <TextField source="school" />
      <TextField source="blog" />
      <BooleanField source="hide" />
      <DateField source="defaultStartTime" />
      <DateField source="defaultEndTime" />
      <NumberField source="defaultHoursPerDay" />
    </Datagrid>
  </List>
)

export const ClassEdit = () => (
  <Edit>
    <SimpleForm>
      <TextField source="id" reference="classes" />
      <TextField source="name" />
      <TextField source="shortName" />
      <TextField source="school" />
      <TextField source="blog" />
      <BooleanField source="hide" />
      <DateField source="defaultStartTime" />
      <DateField source="defaultEndTime" />
      <NumberField source="defaultHoursPerDay" />

    </SimpleForm>
  </Edit>
);

export const ClassCreate = props => (
  <Create {...props} >
    <SimpleForm>
      <TextField source="id" reference="classes" />
      <TextField source="name" />
      <TextField source="shortName" />
      <TextField source="blog" />
      <TextField source="school" />
      <BooleanField source="hide" />
      <DateField source="defaultStartTime" />
      <DateField source="defaultEndTime" />
      <NumberField source="defaultHoursPerDay" />
    </SimpleForm >
  </Create >
);
