module.exports = {
  types: [
    {
      value: ":sparkles: feat",
      name: "✨ feat:    新功能",
    },
    {
      value: ":bug: fix",
      name: "🐛 fix:    修复",
    },
    {
      value: ":memo: docs",
      name: "📝 docs:    文档变更",
    },
    {
      value: ":lipstick: style",
      name: "💄 style:   代码格式 (不影响代码运行的变动)",
    },
    {
      value: ":recycle: refactor",
      name: "♻️  refactor:   重构 (既不增加 feature, 也不修复 bug)",
    },
    {
      value: ":zap: perf",
      name: "⚡️ perf:    性能优化",
    },
    {
      value: ":white_check_mark: test",
      name: "✅ test:    增加测试",
    },
    {
      value: ":wrench: chore",
      name: "🔧 chore:   构建过程或辅助工具的变动",
    },
    {
      value: ":rewind: revert",
      name: "⏪ revert:   回退",
    },
    {
      value: ":rocket: build",
      name: "🚀 build:   打包",
    },
  ],
  messages: {
    type: "请选择提交的类型(必填)：",
    scope: "请选择此更改的范围(必填)：",
    subject: "请简要描述提交(必填)：",
/*  body: "请输入详细描述(可选)：", 
    breaking: "列举破坏性修改(可选)：",
    footer: "请输入要关闭的 issue(可选)：", */
    confirmCommit: "确认要使用以上信息提交？(y/n)：",   
  },
  // 你可以在这里预定义 Scope
  scopes: [
    { name: "main" },
    { name: "app" },
    { name: "data-extraction" },
    { name: "interactive-map" },
    { name: "shared" },
  ],
  allowedCustomScopes:false, 
  skipQuestions: ["body", "footer", "breaking"],
  allowBreakingChanges: [":sparkles: feat", ":bug: fix"], // 允许添加 Breaking Change 的操作
  subjectLimit: 100, // body 主题字数限制
};
