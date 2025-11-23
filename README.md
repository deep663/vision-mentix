# Vision Mentix

This is a responsive landing page for Vision Mentix, a software company. This project is built with React, Vite, and Tailwind CSS, and it showcases the company's services, portfolio, and team.

![Vision Mentix Screenshot](src/assets/vision-mentix-screenshot.png)

## Features

-   **Modern UI/UX:** A clean and modern design with a focus on user experience.
-   **Responsive Design:** The layout is optimized for all screen sizes, from mobile devices to desktops.
-   **Dark Mode:** A toggle to switch between light and dark themes.
-   **Component-Based:** Built with reusable React components.
-   **Fast and Optimized:** Built with Vite for a fast development experience and optimized production builds.

## Tech Stack

-   **Frontend:** [React](https://react.dev/), [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Animation:** [Framer Motion](https://www.framer.com/motion/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18.x or later)
-   npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/visison-mentix.git
    ```
2.  Navigate to the project directory
    ```sh
    cd visison-mentix
    ```
3.  Install NPM packages
    ```sh
    npm install
    ```

### Running the Application

To run the app in the development mode, run the following command:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in the development mode.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run lint`: Lints the code using ESLint.
-   `npm run preview`: Serves the production build locally.

## Project Structure

```
.
├── public
│   └── vite.svg
├── src
│   ├── assets
│   ├── components
│   │   ├── About.jsx
│   │   ├── CTA.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Promise.jsx
│   │   ├── Services.jsx
│   │   ├── Team.jsx
│   │   ├── Testimonials.jsx
│   │   └── WhyUs.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```