# PhysicianOS

This project is a comprehensive medical app designed to diagnose medical reports efficiently. It was built using modern web technologies to ensure performance, scalability, and ease of use.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - A React framework for building fast, server-rendered web applications with ease.
- **Programming Languages**: TypeScript - A strict syntactical superset of JavaScript that adds optional static typing.
- **Authentication**: Clerk - Used for implementing authentication and managing user sessions.
- **UI Components**:
  - [Shadcn/UI](https://shadcn.dev/) - Utilized for building a functional and aesthetic dashboard.
  - React-Dropzone - For implementing file upload functionalities.
- **Payments**: Stripe - Integrated for handling payments, including custom webhooks.
- **Deployment**: [Vercel](https://vercel.com/) - The platform used for deploying the app, offering seamless integration with Next.js.

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/aaronsimca/physicianOS.git
   ```

2. Navigate to the project directory:

   ```bash
   cd physicianOS
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Features

- **Beautiful Landing Page**: Built with a focus on user experience and responsive design.
- **Clerk Authentication**: Secure user authentication and session management.
- **Functional Dashboard**: Created using Shadcn/UI and a custom header for easy navigation.
- **Upload Functionality**: Integrated with React-Dropzone for seamless file uploads.
- **Stripe Checkout**: Implemented for handling payments with a custom webhook for Stripe Webhooks.
- **Pricing Page**: A well-designed pricing page that clearly communicates the available plans.
- **Feature Limiting**: Functionality limitations based on Free/Pro plans.
- **Document Management**: Ability to delete and download documents.
- **App Deployment**: Deployed on Vercel, ensuring fast load times and optimal performance.

## Learn More

To learn more about the technologies used, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
- [Clerk Documentation](https://clerk.dev/docs) - Learn about implementing authentication with Clerk.
- [Stripe Documentation](https://stripe.com/docs) - Learn about payment integration with Stripe.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
