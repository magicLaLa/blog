module.exports = {
  title: '一介书生',
  description: '人间熙攘，好久不见',
  base:'/blog/boom/',
  head: [
    ['link', { rel: 'icon', href: 'http://img.dijiu.com/2016/0722/20160722041848319.jpg' }]
  ],
  host: '192.168.5.18',
  port: 8989,
  // build输出目录
  dest: 'boom',
  // 默认主题配置
  themeConfig: {
    // Github地址
    repo: 'magicLaLa/blog',
    // Algolia搜索
    algolia: {
      apiKey: '<API_KEY>',
      indexName: 'INDEX_NAME'
    },
    nav: [
      {
        text: 'Blog',
        items: [
          { text: 'JavaScript', link: '/Blog/JavaScript/ES6的一些方法和技巧' },
          { text: 'CSS', link: '/Blog/CSSFile/' },
          { text: 'Git', link: '/Blog/GIT/git的一些总结' },
          { text: 'Node', link: '/Blog/Node/node版本管理' }
        ]
      }
    ],
    sidebar: [
      {
        title: 'JavaScript',
        collapsable: true,
        children: [
          '/Blog/JavaScript/ES6的一些方法和技巧',
          '/Blog/JavaScript/箭头函数this的指向'
        ]
      },
      {
        title: 'Git',
        collapsable: true,
        children: [
          '/Blog/GIT/git的一些总结'
        ]
      },
      {
        title: 'Node',
        collapsable: true,
        children: [
          '/Blog/Node/node版本管理'
        ]
      }
    ]
  }
}