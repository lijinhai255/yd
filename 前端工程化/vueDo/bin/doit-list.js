#!/usr/bin/env node

const inquirer = require("inquirer")
const chalk = require("chalk")
const ora = require("ora")
inquirer
  .prompt([
    {
        type:"confirm",
        message:"你想要口罩吗？",
        name:"ok"
    },{
        type:"input",
        message:"你想要啥？",
        name:"which"
    }
  ])
  .then(answers => {
      if(answers.ok){
          console.log(chalk.green("有也不给"))
      }else{
          console.log(chalk.red("我本来不想给你"))
      }
      if(answers.which){
          console.log(chalk.green(answers.which))
      }
      const spinner = ora("文件下载中").start();

    setTimeout(() => {
        spinner.color = 'yellow';
        spinner.text = 'Loading rainbows';
        spinner.stop()
    }, 5000);
    // Use user feedback for... whatever!!
  })
  
console.log("所有的数据 弹窗")