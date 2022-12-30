window.addEventListener("load", async () => {

    await axios({
        method: 'get',
        url: "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ekimunyime"
    })
        .then(({ data }) => {

            const { items } = data

            const articleCard = document.querySelectorAll('.article-card')
            // map through an array ?
            // items.map((item) => {
            const articleTitle = document.querySelectorAll('.article-title')
            const articleImage = document.querySelectorAll('.article-image')
            for (let i = 0; i < articleTitle.length; i++) {

                articleTitle[i].textContent = items[i].title
                articleImage[i].src = items[i].thumbnail
                articleCard[i].href = items[i].link

            }

            {/*

                    categories: ['typescript', 'web-development', 'ui', 'nextjs', 'javascript']
description:"\n<h4>Fonts are an integral part of your project and having your choice and knowing how to implement it can make you feel really excited to keep going on with the project.</h4>\n<figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/1024/0*THrtpxlbbYBU4KGL\"></figure><h4>Prerequisites — Just Two</h4>\n<ul><li>A Next.js project initialized with TypeScript.</li></ul>\n<pre>npx create-next-app@latest --ts<br>// or<br>yarn create next-app --typescript</pre>\n<ul><li>Text to apply your fonts.</li></ul>\n<p>Using CDN is not really a go-to practice in a NextJs project because at first glance unlike React there is no index.html file (App entry point). Popular libraries like Tailwind and AntCSS have npm packages as “best practices” in web apps built with frameworks.</p>\n<p>However, there are exceptions to this and one of them is Google Fonts. Let us explore two methods of implementation for Google Fonts on your project:</p>\n<ol><li><strong>Using the _document.tsx file(Recommended)</strong></li></ol>\n<figure><img alt=\"\"...

link:"https://medium.com/geekculture/using-the-google-fonts-api-with-next-js-and-typescript-the-right-way-ce343d5bce20?source=rss-2de2f48523ce------2"
pubDate:"2022-12-11 11:21:32"
thumbnail:"https://cdn-images-1.medium.com/max/1024/0*THrtpxlbbYBU4KGL"
title:"Using the Google Fonts AP
*/}

            // })


        })
        .catch(error => console.error(error));

});
// Usually you output res i.e. response to the console but to get data Object we use res.data