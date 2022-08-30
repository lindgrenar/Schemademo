// in src/App.js
import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import { PostList } from './posts';
import { PostEdit } from "./post-edit";
import { PostCreate } from "./post-create";
import { UserList } from './users';
import { TeacherList } from './teachers';
import { SchoolList } from './schools';
import { ClassList } from './classes';
import { CoursesList } from "./courses";
/* import jsonServerProvider from 'ra-data-json-server'; */
import simpleRestProvider from 'ra-data-simple-rest';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import Dashboard from "./Dashboard";
/* const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com'); */

const dataProvider = simpleRestProvider('/data');

// <Resource name="users" list={ListGuesser} />

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}> 
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="teachers" list={TeacherList} icon={UserIcon} />
    <Resource name="schools" list={SchoolList} icon={SchoolIcon} />
    <Resource name="classes" list={ClassList} icon={UserIcon} />
    <Resource name="courses" list={CoursesList} icon={UserIcon} />

  </Admin>
);



export default App;