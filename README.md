# 🦹 Villains Club

A CRUD web app for managing a collection of fictional villains — add, update, and remove your favourite movie and anime antagonists.

---

## Tech Stack

- **React + TypeScript** — component-based UI with full type safety
- **React Hook Form** — form state management and validation
- **nanoid** — unique ID generation for each villain entry
- **Tailwind CSS** — utility-first styling.

---

## Features

- **Add** a villain with a name, movie/anime reference, and image URL
- **Edit** existing villain entries via a pre-populated form
- **Delete** villains from the collection
- **Form validation** — required fields, minimum lengths, URL format checks, and whitespace guards
- **Preloaded data** — ships with 5 iconic villains.
- **Responsive card**

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx       # Top nav with Add/Show toggle button
│   ├── UserCard.tsx     # Villain card with Update and Remove actions
│   └── UserForm.tsx     # Add/Edit form with react-hook-form validation
├── data/
│   └── villain.ts       # Seed data for initial villains
└── App.tsx              # Root component, state management
```

---

## Components

| Component      | Role                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------- |
| `App.tsx`      | Owns all state (`villainData`, `editData`, `toggle`). Renders Navbar, form, or card grid conditionally. |
| `Navbar.tsx`   | Displays the logo and a button that toggles between the form and card grid views.                       |
| `UserForm.tsx` | Add/Edit form. Pre-fills with `editData` if editing, otherwise creates a new villain on submit.         |
| `UserCard.tsx` | Displays a villain. **Update** loads it into the form; **Remove** deletes it from state.                |

## State & Flow

```
App (state)
 ├── toggle  →  false = card grid, true = form
 ├── villainData[]  →  passed down to UserCard (read) and UserForm (write)
 └── editData  →  null = add mode, FormData = edit mode

User clicks "+ Add Villain"  →  toggle = true  →  UserForm renders (empty)
User clicks "Update" on card  →  editData = card data, toggle = true  →  UserForm renders (pre-filled)
User submits form  →  villainData updated, editData cleared, toggle = false
User clicks "Remove"  →  villain filtered out of villainData
```
