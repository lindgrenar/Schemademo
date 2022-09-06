// in src/App.js
import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
<<<<<<< HEAD
import { TeacherList } from './teachers';
import { SchoolList } from './schools';
import { ClassList } from './classes';
import { CoursesList } from "./courses";
=======
import { TeacherList, TeacherCreate, TeacherEdit } from './teachers';
import { SchoolList, SchoolCreate, SchoolEdit } from './schools';
import { ClassList, ClassCreate, ClassEdit } from './classes';
>>>>>>> origin/feature-teachers-edit
/* import jsonServerProvider from 'ra-data-json-server'; */
import simpleRestProvider from 'ra-data-simple-rest';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import { ApartmentRounded } from "@mui/icons-material";
import Dashboard from "./Dashboard";
/* const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com'); */

const dataProvider = simpleRestProvider('/data');

// <Resource name="users" list={ListGuesser} />

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
<<<<<<< HEAD
    <Resource name="teachers" list={TeacherList} icon={SchoolIcon} />
    <Resource name="schools" list={SchoolList} create={PostCreate} icon={ApartmentRounded} />
    <Resource name="classes" list={ClassList} icon={PostIcon} />
    <Resource name="courses" list={CoursesList} icon={PostIcon} edit={EditGuesser} />

=======
    <Resource name="teachers" list={TeacherList} edit={TeacherEdit} create={TeacherCreate} icon={UserIcon} />
    <Resource name="schools" list={SchoolList} edit={SchoolEdit} create={SchoolCreate} icon={UserIcon} />
    <Resource name="classes" list={ClassList} create={ClassCreate} edit={ClassEdit} icon={UserIcon} />
>>>>>>> origin/feature-teachers-edit
  </Admin>
);


export default App;