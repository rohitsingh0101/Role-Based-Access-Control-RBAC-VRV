import React from 'react';
import { useStore } from '../store/useStore';
import { Shield, Trash2, Edit, Code, Server, Database, Cog, TestTube, ClipboardList, Eye } from 'lucide-react';

export const RoleList = () => {
  const { roles } = useStore();

  const getRoleIcon = (roleName) => {
    switch (roleName) {
      case 'Frontend Developer':
        return <Code className="h-8 w-8 text-indigo-600" />;
      case 'Backend Developer':
        return <Server className="h-8 w-8 text-indigo-600" />;
      case 'Full Stack Developer':
        return <Database className="h-8 w-8 text-indigo-600" />;
      case 'DevOps Engineer':
        return <Cog className="h-8 w-8 text-indigo-600" />;
      case 'QA Engineer':
        return <TestTube className="h-8 w-8 text-indigo-600" />;
      case 'Project Manager':
        return <ClipboardList className="h-8 w-8 text-indigo-600" />;
      case 'Viewer':
        return <Eye className="h-8 w-8 text-indigo-600" />;
      default:
        return <Shield className="h-8 w-8 text-indigo-600" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-6">
        {roles.map((role) => (
          <div
            key={role.id}
            className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center">
              {getRoleIcon(role.name)}
              <h3 className="ml-2 text-lg font-medium text-gray-900">
                {role.name}
              </h3>
            </div>
            <p className="mt-2 text-sm text-gray-500">{role.description}</p>
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-900">Permissions:</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {role.permissions.map((permission) => (
                  <span
                    key={permission}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                  >
                    {permission}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute top-4 right-4 flex space-x-2">
              <button className="text-gray-400 hover:text-indigo-600 transition-colors duration-200">
                <Edit className="h-4 w-4" />
              </button>
              <button className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
