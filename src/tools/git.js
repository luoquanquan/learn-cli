/*
 * @Author: luoquanquan
 * @Date: 2018-11-15 16:57:36
 * @Last Modified by: luoquanquan
 * @Last Modified time: 2018-11-16 21:06:09
 */

import download from 'download-git-repo';
import request from './request';
import { orgName } from '../../config';

class Git {
  constructor() {
    this.orgName = orgName;
  }

  /**
   * 获取项目组中的项目模板列表
   */
  getProjectList() {
    return request(`/orgs/${this.orgName}/repos`);
  }

  /**
   * 获取项目模板的版本列表
   * @param {String} repo 项目名称
   */
  getProjectVersions(repo) {
    return request(`/repos/${this.orgName}/${repo}/tags`);
  }

  /**
   * 下载 github 项目
   * @param {Object} param 项目信息 项目名称 项目版本 本地开发目录
   */
  downloadProject({ repo, version, repoPath }) {
    return new Promise((resolve, reject) => {
      download(`${this.orgName}/${repo}#${version}`, repoPath, (err) => {
        if (err) reject(err);
        resolve(true);
      });
    });
  }
}

export default Git;
