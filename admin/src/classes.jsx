import { Datagrid, EmailField, List, TextField } from 'react-admin';

export const ClassList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" reference="classes" />
      <TextField source="name" />
      <TextField source="shortName" />
      <TextField source="school" />
      <TextField source="blog" />
      <EmailField source="hide" />
      <TextField source="defaultStartTime" />
      <TextField source="defaultEndTime" />
      <TextField source="defaultlnvoiceTime" />
      <TextField source="defaultHoursPerDay" />
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
      <EmailField source="hide" />
      <TextField source="defaultStartTime" />
      <TextField source="defaultEndTime" />
      <TextField source="defaultlnvoiceTime" />
      <TextField source="defaultHoursPerDay" />

    </SimpleForm>
  </Edit>
);

export const ClassCreate = props => (
  <Create {...props} >
    <SimpleForm>
      <TextField source="id" reference="classes" />
      <TextField source="name" />
      <TextField source="shortName" />
      <TextField source="school" />
      <TextField source="blog" />
      <EmailField source="hide" />
      <TextField source="defaultStartTime" />
      <TextField source="defaultEndTime" />
      <TextField source="defaultlnvoiceTime" />
      <TextField source="defaultHoursPerDay" />
    </SimpleForm >
  </Create >
);
