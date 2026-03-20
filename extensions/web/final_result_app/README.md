Final Document Editor

This simple workspace UI app displays /workspace/document/compiled/final_document.md and allows editing and saving back to that path using the workspace API endpoints.

Files:
- app_manifest.json: app metadata
- entry.js: client mount and simple editor

Notes:
- The app uses the platform's /api/workspace/file and /api/workspace/write endpoints to read/write files.
- Adjust mount_path in app_manifest.json if necessary.