import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'manager';
  company?: string;
  permissions: string[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
  hasPermission: (permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const mockUsers: { [key: string]: User } = {
  'admin@qnbtransport.com': {
    id: '1',
    email: 'admin@qnbtransport.com',
    name: 'Admin User',
    role: 'admin',
    company: 'Q.N.B Transport',
    permissions: ['analytics:view', 'analytics:export', 'users:manage', 'reports:generate']
  },
  'manager@qnbtransport.com': {
    id: '2',
    email: 'manager@qnbtransport.com',
    name: 'Manager User',
    role: 'manager',
    company: 'Q.N.B Transport',
    permissions: ['analytics:view', 'analytics:export']
  },
  'user@qnbtransport.com': {
    id: '3',
    email: 'user@qnbtransport.com',
    name: 'Regular User',
    role: 'user',
    company: 'Q.N.B Transport',
    permissions: []
  }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in real app, this would call an API
    const mockUser = mockUsers[email];
    if (mockUser && password === 'password123') {
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const hasPermission = (permission: string): boolean => {
    return user?.permissions.includes(permission) || false;
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    hasPermission
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};