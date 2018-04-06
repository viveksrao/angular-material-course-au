import * as express from 'express';
import {Application} from "express";
import {getAllCourses, getCourseById} from "./get-courses.route";
import { searchLessons } from './search-lessons.route';

import { getAllAuthors } from './get-authors.route';

const app: Application = express();
app.route('/api/courses').get(getAllCourses);
app.route('/api/courses/:id').get(getCourseById);
app.route('/api/lessons').get(searchLessons);

app.route('/api/authors').get(getAllAuthors);

const httpServer = app.listen(9000, () => {
  console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});
