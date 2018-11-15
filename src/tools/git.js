/*
 * @Author: luoquanquan
 * @Date: 2018-11-15 16:57:36
 * @Last Modified by: luoquanquan
 * @Last Modified time: 2018-11-15 19:39:18
 */

import request from './request';
import { orgName } from '../../config';

class Git {
  constructor() {
    this.orgName = orgName;
  }

  getProjectList() {
    return request(`/orgs/${this.orgName}/repos`);
  }

  getProjectVersions(repo) {
    return request(`/repos/${this.orgName}/${repo}/tags`);
  }

  getProjectUrl() {

  }

  downloadProject() {

  }
}

export default Git;
