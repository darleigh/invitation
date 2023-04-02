---
layout: project
permalink: /:title/
category: projects

meta:
  keywords: "Jekyll, Pineapple"

project:
  title: "Red Pineapple"
  type: "Jekyll"
  url: "https://github.com/arnolds/pineapple"
  logo: "/customer/TruongTan-XuanDi/TTXD1.jpg"
  tech: "HTML, CSS, Boostrap, Sass, JavaScript, jQuery, Jekyll"

agency:
  title: "Red Pineapple Co"
  url: "https://github.com/arnolds/pineapple"
  year: "2017"

images:
{% for i in (1..8) %}
  - image:
    url: "/customer/TruongTan-XuanDi/TTXD{{ i }}.jpg"
{% endfor %}
---