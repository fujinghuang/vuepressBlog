module.exports = {
  title: '个人主页',
  description: 'Personal Website',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: 'JAVA',
          items:[
            {text:'基础',link:'/java/basic/basic.md'},
            {text:'JAVAWEB',link:'/java/senior/senior.md'}
          ]
      },
      {text: 'JAVASCRIPT', link: '/javascript/'},
      {text: '诗和远方', link: '/others/'},
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
  }
};