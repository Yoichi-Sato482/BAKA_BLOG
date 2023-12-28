hexo.extend.generator.register('random', function (locals) {
    const config = hexo.config.random || {}
    const posts = []
    for (const post of locals.posts.data) {
        if (post.random !== false) posts.push(post.path)
    }
    return {
        path: config.path || 'bywind/random.js',
        data: `var posts=${JSON.stringify(posts)};function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};`
    }
})



// 作者: 随风起
// 链接: https://blog.bywind.xyz/posts/c18c7ac1.html
// 来源: 随风起
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。