![Padel Club](https://private-user-images.githubusercontent.com/6444928/392993926-36b04bc5-6eeb-4a87-8663-1cb528516975.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM0MzI3OTcsIm5iZiI6MTczMzQzMjQ5NywicGF0aCI6Ii82NDQ0OTI4LzM5Mjk5MzkyNi0zNmIwNGJjNS02ZWViLTRhODctODY2My0xY2I1Mjg1MTY5NzUuc3ZnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTIwNSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDEyMDVUMjEwMTM3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YjQ1YWM1MWI2NzdmODYwYjMwODhiNjM4ZjljMTFiNmM0YTIxNThhNmU2MzU4MWFiOGYzNjI1Mjk2NzFmMDBkMyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.BoSD7Uw8U0swXDrKMYE91-sHdebDfc4j2Pwn9LdnP7o)

Welcome to **Padel Club**, a Next.js 15 project designed to manage a padel club platform. This project includes server actions, user authentication, a customizable dashboard, and reusable UI components, built with a modular and scalable architecture.

---

## **Features**

- 🔐 **Authentication System**:

  - Login and Registration with secure password hashing (using bcrypt).
  - Session management through NextAuth.js.

- 🖥️ **Dashboard**:

  - Modular design for user-specific features.
  - Extensible structure to support future enhancements.

- 🎨 **Reusable UI Components**:

  - Buttons, forms, alerts, and inputs built with accessibility in mind.
  - Easily customizable for scaling.

- ⚙️ **Backend Integration**:

  - Prisma as the ORM for database interactions.
  - Structured repositories for clean and maintainable database queries.

- 🛠️ **Scalable Architecture**:
  - Clear separation of concerns with actions, repositories, services, and hooks.

---

## **Project Structure**

```plaintext
padel-club/
├── actions/                # Server actions for handling requests
│   ├── login-action.ts
│   ├── register-action.ts
├── app/                    # Next.js app directory for pages and layouts
│   ├── auth/
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/
│   ├── fonts/              # Custom fonts
│   └── layout.tsx          # Global layout
├── components/             # Reusable UI and feature components
│   ├── auth/               # Authentication-specific components
│   ├── home/               # Components for the homepage
│   └── ui/                 # Core UI components
├── hooks/                  # Custom React hooks
│   └── use-action-response.ts
├── lib/                    # Shared logic and utilities
│   ├── repositories/       # Database interaction logic
│   ├── services/           # Business logic (e.g., auth services)
│   └── utils/              # General utilities (e.g., Prisma config)
├── prisma/                 # Prisma schema and migrations
│   ├── schema.prisma       # Database schema
│   ├── seed.ts             # Seed data for the database
│   └── seed-utils.ts       # Utilities for database seeding
├── public/                 # Public assets (e.g., images, fonts)
├── schemas/                # Validation schemas (Zod)
│   ├── login-schema.ts
│   └── register-schema.ts
├── types/                  # Type definitions
│   ├── action-response.ts
│   ├── repository.ts
│   ├── user.ts
│   └── next-auth.d.ts
├── .env.example            # Example environment variables
├── README.md               # Project documentation
└── tsconfig.json           # TypeScript configuration
```

---

## **Setup**

### **1. Clone the Repository**

```bash
git clone https://github.com/your-username/padel-club.git
cd padel-club
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Configure Environment Variables**

- Create a `.env` file in the root directory.
- Use `.env.example` as a template and fill in your credentials.

### **4. Migrate the Database**

Ensure Prisma is set up correctly:

```bash
npx prisma migrate dev
```

### **5. Seed the Database (Optional)**

To populate the database with test data:

```bash
npx ts-node prisma/seed.ts
```

### **6. Run the Development Server**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## **Tech Stack**

- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Prisma ORM, Server Actions (Next.js 15)
- **Database**: MySQL/PostgreSQL (configurable)
- **Authentication**: Auth.js
- **Validation**: Zod

---

## **Scripts**

| Script              | Description                                |
| ------------------- | ------------------------------------------ |
| `npm run dev`       | Runs the development server                |
| `npm run build`     | Builds the production-ready application    |
| `npm run start`     | Starts the application in production mode  |
| `npx prisma studio` | Opens Prisma Studio to manage the database |

---

## **Contributing**

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to your branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

---

## **License**

This project is licensed under the [MIT License](LICENSE).

---

## **Contact**

For questions or feedback, feel free to open an issue.
