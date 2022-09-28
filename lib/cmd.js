import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';

const sections = [
  {
    header: '狗屁不通文章生成器',
    content: '生成随机的文章段落用于测试'
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'title',
        typeLabel: '{underline string}',
        description: '文章的主题。'
      },
      {
        name: 'min',
        typeLabel: '{underline number}',
        description: '文章最小数字。'
      },
      {
        name: 'max',
        typeLabel: '{underline number}',
        description: '文章最大数字。'
      }
    ]
  }
];
const usage = commandLineUsage(sections);

const optionDefinitions = [
  {name: 'help'},
  {name: 'title', alias: 't', type: String},
  {name: 'min', type: String},
  {name: 'max', type: String}
];
const options = commandLineArgs(optionDefinitions);

if('help' in options) {
  console.log(usage);
  process.exit();
}
export { options };
