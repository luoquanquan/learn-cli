/*
 * @Author: luoquanquan
 * @Date: 2018-11-14 20:51:18
 * @Last Modified by: luoquanquan
 * @Last Modified time: 2018-11-15 17:47:10
 */

// colors console.log 文本添加字体颜色, 美观
import 'colors';

// 接收命令行参数, 提供基础信息提示功能
import commander from 'commander';

// 内部模块
import { existsSync } from 'fs';
import { resolve } from 'path';
import { version } from '../package.json';

commander.version(version)
  .parse(process.argv);

const [todo = ''] = commander.args;

if (existsSync(resolve(__dirname, `command/${todo}.js`))) {
  require(`./command/${todo}.js`);
} else {
  console.log(
    `
      你输入了未知指令, 小哥哥我已经受不了挂了...
    `.red,
  );
  process.exit(-1);
}
