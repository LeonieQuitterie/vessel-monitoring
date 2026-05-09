# Vessel Monitoring System

Real-time Monitoring · Smart Analytics · Predictive Alerts

> A modern React dashboard for vessel health monitoring, anomaly detection, and maintenance management — built for **Sea Sense Technologies**.

---

## Screenshots

> _(Add screenshots here after UI is built)_

---

## Tech Stack

| Layer | Tool | Version |
|---|---|---|
| Build Tool | Vite | ^6.x |
| Language | TypeScript | ^5.x |
| UI Framework | React | ^18.x |
| Styling | Tailwind CSS | ^4.x |
| Server State | TanStack Query | ^5.x |
| Client State | Zustand | ^5.x |
| Routing | React Router | ^7.x |
| Forms | React Hook Form + Zod | ^7.x / ^3.x |
| Charts | Recharts | ^2.x |
| Icons | Lucide React | latest |
| HTTP Client | Axios | ^1.x |
| Testing | Vitest + React Testing Library | latest |

---

## Project Structure

```
src/
├── app/                        # App-level setup (Router, Providers)
├── features/                   # Feature modules
│   ├── dashboard/
│   ├── analytics/
│   ├── alerts/
│   ├── reports/
│   └── settings/
├── shared/                     # Shared across features
│   ├── components/ui/          # Reusable UI atoms (Badge, Card, Button...)
│   ├── components/layout/      # AppShell, Sidebar, TopHeader
│   ├── hooks/                  # Generic hooks
│   ├── utils/                  # Pure utility functions
│   ├── types/                  # Global TypeScript types
│   └── constants/              # App-wide constants
├── services/                   # Data layer
│   ├── interfaces/             # Service contracts (IAlertService...)
│   ├── mock/                   # Mock data + implementations
│   └── api/                    # Real API implementations (future)
└── store/                      # Zustand global stores
```

Each feature follows this internal structure:
```
features/alerts/
├── components/     # Dumb UI components
├── hooks/          # Data hooks (useAlerts, useAlertActions...)
├── types/          # Feature-specific types
├── utils/          # Feature-specific helpers
└── index.ts        # Public API of this feature
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/LeonieQuitterie/vessel-monitoring.git
cd vessel-monitoring

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ⚙️ Environment Variables

Create a `.env.development` file in the root:

```env
VITE_USE_MOCK=true
VITE_API_BASE_URL=http://localhost:3000
```

For production:

```env
VITE_USE_MOCK=false
VITE_API_BASE_URL=https://api.seasense.com
```

> **To switch from mock data to real API:** change `VITE_USE_MOCK` to `false`. No component code changes needed.

---

## 🗂️ Pages

| Route | Page | Status |
|---|---|---|
| `/` | Dashboard | 🚧 In progress |
| `/analytics` | Analytics | 🚧 In progress |
| `/alerts` | Alerts | 🚧 In progress |
| `/reports` | Reports | 🚧 In progress |
| `/settings` | Settings | 🚧 In progress |

---

## 🏗️ Architecture Decisions

### Mock → Real API with zero UI changes

All data access goes through a service interface:

```
Component → Hook → IService → MockService | ApiService
```

- `VITE_USE_MOCK=true` → uses `MockAlertService`
- `VITE_USE_MOCK=false` → uses `ApiAlertService`
- Components and hooks are **completely unaware** of the data source

### State Management

- **TanStack Query** — server/async state (data fetching, caching, background sync)
- **Zustand** — client/UI state (selected item, filters, modal open/close)
- Rule: never mix the two

### Feature-Based Architecture

Each feature is self-contained. Deleting a feature = deleting one folder. Cross-feature shared code lives in `shared/`.

---

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run tests with Vitest
npm run type-check   # TypeScript type checking
npm run lint         # ESLint
```

---

## 🛣️ Roadmap

- [x] Project setup & architecture
- [x] Folder structure & path aliases
- [x] Providers (QueryClient, Router)
- [x] Type definitions
- [x] Mock data & service interfaces
- [x] Layout shell (Sidebar, TopHeader)
- [x] Dashboard page
- [ ] Analytics page
- [ ] Alerts page
- [ ] Reports page
- [ ] Settings page
- [ ] Backend API integration (MySQL)
- [ ] Authentication

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Commit with convention: `feat:`, `fix:`, `chore:`, `docs:`
3. Push and open a Pull Request

---

## 📄 License

Private project — VesESP © 2024