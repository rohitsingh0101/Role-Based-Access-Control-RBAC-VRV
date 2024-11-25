export type Permission = 'create' | 'read' | 'update' | 'delete';

export interface Role {
  id: string;
  name: string;
  permissions: Permission[];
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  roleId: string;
  status: 'active' | 'inactive';
}