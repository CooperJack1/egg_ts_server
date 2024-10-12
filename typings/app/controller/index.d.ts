// This file is created by egg-ts-helper@1.35.1
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportUser from '../../../app/controller/user';
import ExportUtil from '../../../app/controller/util';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    user: ExportUser;
    util: ExportUtil;
  }
}
