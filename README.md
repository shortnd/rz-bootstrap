# rz-bootstrap
Revize Bootstrap Framework

# SCSS Installation + Guide
```bash
npm install --lagacy-bundling
```
> Always make sure to have the "--legacy-bundling flag". Otherwise the node_modules package is going to look like a mess.

After node_modules installation, navigate to the gulpfile.js. If you are working in production for a client, make sure to uncomment the code: `.pipe(gulp.dest('_assets_/css'));`. And also comment out the code below it: `.pipe(gulp.dest('scss_styles/css'));`.

Otherwise, if you are editing the scss converted framework, just leave the gulpfile.js as-is.

## Editing the SCSS converted framework
Open a git enabled Terminal/CLI. Make sure that you run a fresh `npm install --lagacy-bundling`. Afterwards, you can use the the SCSS preprocessing with Gulp! Try running the following command in the Terminal/CLI:
```bash
gulp css
```
Now your SCSS is converted into CSS on the scss_styles/css directory.

If you want to have Gulp watch for changes to your SCSS and process it as you're writing, run the following command  in the Terminal/CLI:
```bash
gulp scss:watch
```
Now Gulp is watching your files for changes, and will process the code as you make changes to it.

@devin - Slack