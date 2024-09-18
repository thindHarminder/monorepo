# Cloudflare: Monolithic Frontend and Backend App

This project is a monorepo containing a frontend JavaScript application and a Cloudflare Worker backend. It uses GitHub Actions for automated deployment to Cloudflare Pages and Cloudflare Workers.

## Project Structure

The project is organized as follows:

root/
├── frontend/ # Vite-powered frontend application
├── backend/ # Cloudflare Worker backend
├── .github/ # GitHub Actions workflows
└── package.json # Root package.json for workspace management

## Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/thindharminder/monolithic-cf-repo.git
   cd monolithic-cf-repo
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up Cloudflare account:

   - Create a Cloudflare account if you don't have one
   - Set up a Cloudflare Pages project for the frontend (you can also do this using CLI)
   - Set up a Cloudflare Worker for the backend (you can also do this using CLI)

4. Configure GitHub Secrets:

   - CLOUDFLARE_API_TOKEN
   - CLOUDFLARE_ACCOUNT_ID
   - CLOUDFLARE_PROJECT_NAME (for Pages)

5. Customize the frontend and backend code as needed

6. Push changes to GitHub, open a PR and merge to main to trigger automatic deployment

---

## Frontend (Vite)

We use Vite for the frontend due to its fast build times and excellent developer experience. To customize:

1. Navigate to the `frontend` directory
2. Modify the Vite configuration in `vite.config.js`
3. Add or modify components in the `src` directory

### Frontend Build

```
npm run build
```

This will create a `dist` folder with the optimized frontend assets with following structure:

dist/
├── assets/
│ ├── ... # Various asset files
├── main.js
├── pages/
│ ├── ... # Various page files

### Using code in Webflow

1. Go to Webflow custom code settings
2. Import add this custom code in the custom code settings

```
<script>
window.loadViteJs = function(pagename) {
    const production = true;
    const devUrl = "http://localhost:5173/pages";
    const prodUrl = "https://dhar.io/pages";
    const extension = production ? ".js" : ".ts";
    const url = production ? prodUrl : devUrl;
    const pageUrl = `${url}/${pagename}${extension}`;
    const script = document.createElement("script");
    script.src = pageUrl;
    script.async = true;
    script.type = "module";
    document.head.appendChild(script);
}
</script>
```

3. Now on each page you can use the `loadViteJs` function to load the page's Vite-powered JavaScript file.

```
<script>
window.loadViteJs("main"); // replace main with the name of the page
</script>
```

## Backend (Cloudflare Worker)

The backend uses Cloudflare Workers for serverless computing. To customize:

1. Navigate to the `backend` directory
2. Modify the Worker script in `index.js`
3. Update the `wrangler.toml` configuration as needed

## Deployment

Deployment is handled automatically by GitHub Actions. When changes are pushed to the main branch:

1. The frontend is built and deployed to Cloudflare Pages
2. The backend is deployed to Cloudflare Workers

## Recommended Extensions

For the best development experience, we recommend the following VS Code extensions:

- Terminal Keeper
- Prettier
- Vite
- Cloudflare Workers

## Customization

To customize this template for your own project:

1. Update the `package.json` files in the root, frontend, and backend directories
2. Modify the GitHub Actions workflows in `.github/workflows`
3. Update this README with your project-specific information

## License

This project is licensed under the ISC License. See the LICENSE file for details.
