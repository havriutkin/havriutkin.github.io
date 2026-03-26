---
layout: home
title: Home
hero_title: Hi, I'm Havriutkin
hero_subtitle: Software developer passionate about building useful things. Here you'll find my projects, thoughts, and experiments.
---

<section class="home-section">
  <h2 class="section-title">Recent Projects</h2>
  <div class="projects-grid">
    {% assign recent_projects = site.projects | sort: "date" | reverse | limit: 3 %}
    {% for project in recent_projects %}
    <a href="{{ project.url | relative_url }}" class="project-card">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div class="project-card-footer">
        {% for t in project.tech %}
          <span class="tag">{{ t }}</span>
        {% endfor %}
      </div>
    </a>
    {% endfor %}
  </div>
  <div class="section-more">
    <a href="{{ '/projects' | relative_url }}">All projects &rarr;</a>
  </div>
</section>

<section class="home-section">
  <h2 class="section-title">Latest Posts</h2>
  <ul class="post-list">
    {% for post in site.posts limit: 3 %}
    <li class="post-list-item">
      <p class="post-list-date">{{ post.date | date: "%B %-d, %Y" }}</p>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    </li>
    {% endfor %}
  </ul>
  <div class="section-more">
    <a href="{{ '/blog' | relative_url }}">All posts &rarr;</a>
  </div>
</section>
