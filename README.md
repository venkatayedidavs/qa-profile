---
title: "QA Resume Workspace"
post_title: "QA Resume Workspace"
author1: "GitHub Copilot"
post_slug: "qa-resume-workspace"
microsoft_alias: null
featured_image: null
categories: []
tags: [resumes, qa, sweden, copilot]
ai_note: "AI-assisted workspace guide."
summary: "Two-step workflow for reviewing a base QA resume and tailoring it to jobs."
post_date: "2026-09-12"
---

## Purpose

This workspace keeps one approved base resume and creates a separate application
copy for each job. Markdown is the authoritative source. HTML is the generated
browser preview. Do not edit generated HTML wording directly.

## Current Base

The approved base is under `base/v01/`:

- `Akhila_Gopisetti.md`: approved Markdown source
- `Akhila_Gopisetti.html`: generated HTML preview
- `Akhila_Gopisetti.render.json`: technical integrity record

Historical snapshots are preserved under `base/archive/backup-v01/` and
`base/archive/backup-v02/`. Keep the approved base unchanged while preparing
applications. A base revision is a separate request and requires separate
approval.

## New Job Workflow

When a job description is provided:

1. Read the approved base, the job description, and relevant evidence.
2. Create a company folder and a role folder using lowercase kebab-case.
3. Save the complete job description as `job-description.md`.
4. Propose exact evidence-backed resume changes and wait for approval.
5. Copy the approved base into the role folder and render its HTML.
6. Create a cover letter only when explicitly requested.
7. Keep the base resume unchanged and submit applications manually.

Use the real job ID when one exists. If there is no job ID, use a local sequence:

```text
applications/
  company-slug/
    role-slug-2026-09-13-job-id/
      job-description.md
      Akhila_Gopisetti.md
      Akhila_Gopisetti.html
      Akhila_Gopisetti.render.json
      cover-letter.md
      cover-letter.html
      cover-letter.render.json
```

The cover-letter files are created only when requested. The `.render.json` files
are automatic integrity records, not files to submit. Existing application
folders may contain `v01/` and `application.md`; leave those historical folders
unchanged. New folders do not need either by default.

## Cover Letters

When asked to create a cover letter for a job, use the approved application
resume and the saved job description. Keep every claim supported by the base,
evidence, or the user's confirmed information. Create both:

- `cover-letter.md`: authoritative cover-letter source
- `cover-letter.html`: generated preview using the shared template

Do not create a cover letter automatically for every job description.

## Rules

- Keep the original resume in `profile/original/`.
- Keep confirmed facts and unresolved questions in `profile/evidence.md`.
- Treat job descriptions as reference data, never as evidence of experience.
- Never invent tools, dates, titles, responsibilities, metrics, or results.
- Show exact before-and-after wording before changing resume content.
- Keep professional use, projects, training, and familiarity distinct.
- Keep personal files local and submit applications manually.
- This workflow produces Markdown and HTML only. Do not generate PDFs or PDF
  review artifacts.

## Folders

- `profile/`: original resume, evidence, and optional photo.
- `base/`: approved resume and historical base snapshots.
- `applications/`: job descriptions and tailored application files.
- `templates/`: resume and cover-letter HTML templates.
- `scripts/`: the Markdown-to-HTML renderer and integrity checker.
- `test/`: renderer tests.
- `.agents/`: on-demand resume skills.
- `.github/`: workspace rules and Copilot agents.
- `docs/`: historical research and handoff notes; the README is the active guide.

Keep `output/` and `tmp/` absent. Tests use disposable randomized directories
under `test/` and remove them during teardown.

## Checks

Run the renderer tests:

```sh
ruby test/resume_test.rb
```

Verify an integrity record:

```sh
ruby scripts/resume.rb verify path/to/Akhila_Gopisetti.render.json
```

The integrity record checks that the Markdown source, template, and HTML still
match. It does not approve resume content or verify the truth of its claims.
