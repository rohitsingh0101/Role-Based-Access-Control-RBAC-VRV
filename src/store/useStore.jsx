import { create } from 'zustand';

const defaultRoles = [
  {
    id: '1',
    name: 'Admin',
    permissions: ['create', 'read', 'update', 'delete'],
    description: 'Full system access with administrative privileges'
  },
  {
    id: '2',
    name: 'Frontend Developer',
    permissions: ['read', 'update'],
    description: 'UI/UX implementation and frontend maintenance'
  },
  {
    id: '3',
    name: 'Backend Developer',
    permissions: ['create', 'read', 'update'],
    description: 'API development and database management'
  },
  {
    id: '4',
    name: 'Full Stack Developer',
    permissions: ['create', 'read', 'update', 'delete'],
    description: 'Complete application development and maintenance'
  },
  {
    id: '5',
    name: 'DevOps Engineer',
    permissions: ['read', 'update', 'delete'],
    description: 'Infrastructure and deployment management'
  },
  {
    id: '6',
    name: 'QA Engineer',
    permissions: ['read', 'update'],
    description: 'Quality assurance and testing'
  },
  {
    id: '7',
    name: 'Project Manager',
    permissions: ['read', 'update'],
    description: 'Project oversight and team management'
  },
  {
    id: '8',
    name: 'Viewer',
    permissions: ['read'],
    description: 'Read-only access to project resources'
  }
];

const defaultUsers = [
  {
    id: '1',
    name: 'Mohit Singh',
    email: 'mohitsingh@.com',
    roleId: '1',
    status: 'active'
  },
  {
    id: '2',
    name: 'Rohit kumar',
    email: 'Rohitkumar@.com',
    roleId: '2',
    status: 'active'
  },
  {
    id: '3',
    name: 'Tammana',
    email: 'Tammana@.com',
    roleId: '3',
    status: 'active'
  },
  {
    id: '4',
    name: 'Vishal ',
    email: 'Vishlnew@.com',
    roleId: '4',
    status: 'active'
  }
];

export const useStore = create((set) => ({
  users: defaultUsers,
  roles: defaultRoles,
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  updateUser: (id, updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      ),
    })),
  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
  addRole: (role) => set((state) => ({ roles: [...state.roles, role] })),
  updateRole: (id, updatedRole) =>
    set((state) => ({
      roles: state.roles.map((role) =>
        role.id === id ? { ...role, ...updatedRole } : role
      ),
    })),
  deleteRole: (id) =>
    set((state) => ({
      roles: state.roles.filter((role) => role.id !== id),
    })),
}));
