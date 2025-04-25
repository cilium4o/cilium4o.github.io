# My Portfolio

This is my personal portfolio website created using React and Vite, deployed via GitHub Pages.

## Development

To run the development server:

```bash
npm run dev
```

## Updating the Live Site

This project is deployed using the `gh-pages` branch.

1.  Make your desired code changes in the `src` directory or other relevant files on the `master` branch.
2.  Commit and push your changes to the `master` branch (optional, but good practice):
    ```bash
    git add .
    git commit -m "Your change description"
    git push origin master
    ```
3.  Run the deployment script:
    ```bash
    npm run deploy
    ```
    This command will:
    *   Build the static site into the `dist` folder.
    *   Push the contents of the `dist` folder to the `gh-pages` branch.
4.  GitHub Pages will automatically detect the changes on the `gh-pages` branch and redeploy your site. Wait a minute or two for the changes to appear live at [https://cilium4o.github.io/](https://cilium4o.github.io/).

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
