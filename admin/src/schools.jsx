<<<<<<< HEAD
<<<<<<< HEAD
import { Datagrid, List, TextField } from 'react-admin';
=======
=======
>>>>>>> feature-teachers-edit
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
<<<<<<< HEAD
>>>>>>> origin/feature-teachers-edit
=======
>>>>>>> feature-teachers-edit

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

