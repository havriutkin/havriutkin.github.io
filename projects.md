---
layout: page
title: Projects
description: A collection of things I've built.
permalink: /projects/
---

<div class="projects-grid">
  {% assign sorted_projects = site.projects | sort: "date" | reverse %}
  {% for project in sorted_projects %}
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
