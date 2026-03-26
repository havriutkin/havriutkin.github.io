# Site Maintenance Instructions

This file describes how to maintain and add content to the Jekyll GitHub Pages site at [havriutkin.github.io](https://havriutkin.github.io).

---

## Table of Contents

1. [Local Development Setup](#local-development-setup)
2. [Site Structure](#site-structure)
3. [Adding a Blog Post](#adding-a-blog-post)
4. [Adding a Project](#adding-a-project)
5. [Updating Site Settings](#updating-site-settings)
6. [Customising the Design](#customising-the-design)
7. [Deployment](#deployment)

---

## Local Development Setup

**Requirements:** Ruby ≥ 3.0 and Bundler.

```bash
# 1. Clone the repository
git clone https://github.com/havriutkin/havriutkin.github.io.git
cd havriutkin.github.io

# 2. Install dependencies
bundle install

# 3. Start the local development server
bundle exec jekyll serve

# 4. Open http://localhost:4000 in your browser
```

Changes to Markdown files and CSS are picked up automatically (hot-reload). Changes to `_config.yml` require a server restart.

---

## Site Structure

```
havriutkin.github.io/
│
├── _config.yml          # Global site settings (title, URL, plugins…)
├── Gemfile              # Ruby/Jekyll dependencies
│
├── _layouts/            # Page templates
│   ├── default.html     # Outer HTML shell (head, header, footer)
│   ├── home.html        # Landing page (adds hero section)
│   ├── page.html        # Generic content page
│   ├── post.html        # Blog post
│   └── project.html     # Project detail page
│
├── _includes/           # Reusable HTML fragments
│   ├── header.html      # Site header & navigation
│   └── footer.html      # Site footer
│
├── _posts/              # Blog posts (Markdown)
│   └── YYYY-MM-DD-title.md
│
├── _projects/           # Project pages (Markdown collection)
│   └── project-name.md
│
├── assets/
│   └── css/
│       └── main.css     # All styles
│
├── index.md             # Landing / home page
├── projects.md          # Projects listing page
├── blog.md              # Blog listing page
└── instructions.md      # This file
```

---

## Adding a Blog Post

1. Create a new file inside `_posts/` with the filename format:

   ```
   YYYY-MM-DD-your-post-title.md
   ```

   Example: `_posts/2025-04-20-my-new-post.md`

2. Add the following front matter at the top of the file:

   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: 2025-04-20 10:00:00 +0000
   tags: [tag1, tag2]
   excerpt: "A short one-sentence summary shown in the post list."
   ---
   ```

   | Field     | Required | Description                                         |
   |-----------|----------|-----------------------------------------------------|
   | `layout`  | Yes      | Always `post`                                       |
   | `title`   | Yes      | Displayed as the post heading and in the post list  |
   | `date`    | Yes      | Must match the date in the filename                 |
   | `tags`    | No       | Array of strings; shown on the post and listing     |
   | `excerpt` | No       | Override the auto-generated excerpt                 |

3. Write your post content below the front matter in standard Markdown.

4. Commit and push — GitHub Pages will publish it automatically.

---

## Adding a Project

1. Create a new file inside `_projects/` — the filename becomes the URL slug:

   ```
   _projects/my-cool-project.md
   ```

   This will be accessible at `/projects/my-cool-project/`.

2. Add front matter:

   ```yaml
   ---
   title: My Cool Project
   date: 2025-04-20
   description: One-line summary shown in the project card on the listing page.
   tech: [Python, FastAPI, PostgreSQL]
   github: https://github.com/havriutkin/my-cool-project
   demo: https://example.com           # optional
   ---
   ```

   | Field         | Required | Description                                           |
   |---------------|----------|-------------------------------------------------------|
   | `title`       | Yes      | Project name                                          |
   | `date`        | Yes      | Used for sorting (newest first)                       |
   | `description` | Yes      | Short summary shown in project cards                  |
   | `tech`        | No       | Array of technologies; displayed as tags              |
   | `github`      | No       | Link to GitHub repository                             |
   | `demo`        | No       | Link to a live demo                                   |

3. Write the full project description in Markdown below the front matter.

4. Commit and push.

---

## Updating Site Settings

All global settings live in `_config.yml`:

```yaml
title: Havriutkin           # Shown in the header and browser tab
description: …              # Shown in the hero subtitle and meta tags
author: Havriutkin           # Shown in the footer copyright
url: "https://havriutkin.github.io"
```

After editing `_config.yml`, restart the local server with `bundle exec jekyll serve`.

---

## Customising the Design

All styles are in a single file: `assets/css/main.css`.

Key CSS custom properties (variables) at the top of the file control the colour palette:

```css
:root {
  --color-bg: #0f0f0f;           /* Page background */
  --color-surface: #1a1a1a;      /* Card / header background */
  --color-border: #2e2e2e;       /* Borders */
  --color-text: #e0e0e0;         /* Main text */
  --color-text-muted: #888;      /* Secondary text */
  --color-accent: #7c6af7;       /* Primary accent (purple) */
  --color-accent-hover: #9b8dff; /* Accent on hover */
  --color-accent-secondary: #4fc3f7; /* Code highlight colour */
}
```

Change these variables to retheme the entire site instantly.

### Adding new layouts or includes

- Add a new layout file to `_layouts/` and reference it in a page's front matter with `layout: your-layout-name`.
- Add a new include to `_includes/` and embed it anywhere with `{% include your-file.html %}`.

---

## Deployment

The site is deployed automatically via **GitHub Pages**:

1. Push any commit to the `main` branch (or whichever branch is configured under **Settings → Pages**).
2. GitHub runs Jekyll and publishes the built site.
3. The live site updates within ~1–2 minutes.

**No manual build step is required.** GitHub Pages runs Jekyll natively.

To verify the build status, check the **Actions** tab in the GitHub repository — a green checkmark means the deployment succeeded.

### Troubleshooting

| Symptom | Likely cause | Fix |
|---------|-------------|-----|
| Post not appearing | Wrong filename format | Rename to `YYYY-MM-DD-title.md` |
| Post not appearing | Future date | Change `date` to today or the past |
| Layout looks broken | CSS path wrong | Check `baseurl` in `_config.yml` |
| Build fails | Invalid YAML front matter | Validate YAML at [yamllint.com](https://www.yamllint.com) |
| `bundle install` fails | Wrong Ruby version | Use Ruby ≥ 3.0; try `rbenv` or `rvm` |
