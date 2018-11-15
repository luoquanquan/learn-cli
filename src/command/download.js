/*
 * @Author: luoquanquan
 * @Date: 2018-11-15 15:57:42
 * @Last Modified by: luoquanquan
 * @Last Modified time: 2018-11-15 20:08:44
 */

// 命令管理
import commander from 'commander';
// 命令行交互工具
import inquirer from 'inquirer';
// 命令行中显示加载中
import ora from 'ora';
import Git from '../tools/git';

class Download {
  constructor() {
    this.git = new Git();
    this.commander = commander;
    this.inquirer = inquirer;
    this.getProList = ora('获取项目列表...');
    this.getTagList = ora('获取项目版本...');
    this.downLoad = ora('正在加速为您下载代码...');
  }

  run() {
    this.commander
      .command('download')
      .description('从远程下载代码到本地...')
      .action(() => { this.download(); });

    this.commander.parse(process.argv);
  }

  async download() {
    let getProListLoad;
    let getTagListLoad;
    // let downLoadLoad;
    let repos;
    let version;
    try {
      getProListLoad = this.getProList.start();
      repos = await this.git.getProjectList();
      getProListLoad.succeed('获取项目列表成功');
    } catch (error) {
      console.log(error);
      getProListLoad.fail('获取项目列表失败...');
      process.exit(-1);
    }
    if (repos.length === 0) {
      console.log('\n可以开发的项目数为 0, 肯定是配置错啦~~\n'.red);
      process.exit(-1);
    }
    const choices = repos.map(({ name }) => name);
    const questions = [
      {
        type: 'list',
        name: 'repo',
        message: '请选择你想要开发的项目类型',
        choices,
      },
    ];
    const { repo } = await this.inquirer.prompt(questions);
    // 获取项目的版本, 这里默认选择确定项目的最近一个版本
    try {
      getTagListLoad = this.getTagList.start();
      [{ name: version }] = await this.git.getProjectVersions(repo);
      getTagListLoad.succeed('获取项目版本成功');
    } catch (error) {
      console.log(error);
      getTagListLoad.fail('获取项目版本失败...');
      process.exit(-1);
    }

    console.log(`您选择的项目是${repo}, 即将下载版本${version}`);
    // try {
    //   downLoadLoad = this.downLoad.start();

    //   downLoadLoad.succeed('下载代码成功');
    // } catch (error) {
    //   console.log(error);
    //   downLoadLoad.fail('下载代码失败...');
    // }
  }
}
const D = new Download();
D.run();
