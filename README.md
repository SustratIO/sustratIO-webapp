# SustratIO-Web-App

Web application to consume, interact and display data fetched from
[SustratIO](https://github.com/SustratIO/sustratIO.).

## Design

The project follows a *Domain-Driven Design* in which there layers are clearly
differentiated:

- **Domain**: Contains interfaces, types and validation functions that define
core business logic.
- **Infrastructure**: Implements external APIs communication, data mappers and
HTTP clients.
- **Application**: Custom hooks that orchestrate domain logic, interact with
global state or manage mutations/queries.
- **Presentation**: Visual components.

### Folder Structure

```plaintext
src/
├── app/                    # Global providers, routes, main layout...
│   ├── components/         # Global components
│   ├── layouts/            # Global layouts
│   ├── routes/             # Routes for TanStack Router
│   └── stores/             # State controllers
│
├── core/                   # HTTP clients, global utilities, security...
│   ├── auth/               # Auth providers
│   └── types/              # Types for core implementations
│
├── features/               # Bounded Context (Domains)
│   └── <feature>           # Specific bounded module.
│       ├── index.ts        # Public module API.
│       ├── domain/         # Types.
│       ├── infrastructure/ # API clients, frontend-backend mappers.
│       ├── application/    # Hooks (*`useXYZ`*).
│       └── presentation/   # React Components.
│
└── shared/                 # Generic resources (cross-domain)
    ├── components/         # UI that it's purely generic and re-usable.
    └── types/              # Common types (pagination, APIResponse...)
```
