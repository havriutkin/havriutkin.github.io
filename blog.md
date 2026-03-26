---
layout: page
title: Blog
description: Thoughts, tutorials, and notes.
permalink: /blog/
---

<ul class="post-list">
  {% for post in site.posts %}
  <li class="post-list-item">
    <p class="post-list-date">{{ post.date | date: "%B %-d, %Y" }}</p>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 35 }}</p>
    {% if post.tags.size > 0 %}
    <div style="margin-top:0.4rem;">
      {% for tag in post.tags %}<span class="tag">{{ tag }}</span> {% endfor %}
    </div>
    {% endif %}
  </li>
  {% endfor %}
</ul>
