<<<<<<< HEAD
import { Datagrid, List, TextField } from 'react-admin';
=======
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  EmailField,
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput
} from 'react-admin';
>>>>>>> origin/feature-teachers-edit

export const SchoolList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" reference="schools" />
      <TextField source="name" />
      <TextField source="shortName" />
    </Datagrid>
  </List>
)

export const SchoolEdit = () => (
  <Edit>
    <SimpleForm>
      <TextField source="id" reference="schools" />
      <TextInput source="name" />
      <TextInput source="shortName" />

    </SimpleForm>
  </Edit>
);

export const SchoolCreate = props => (
  <Create {...props} >
    <SimpleForm>
      <TextField source="id" reference="schools" />
      <TextInput source="name" />
      <TextInput source="shortName" />
    </SimpleForm >
  </Create >
);

