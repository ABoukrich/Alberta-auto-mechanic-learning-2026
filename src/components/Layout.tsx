import { ReactNode, useState } from 'react';
import { Wrench, Home, BookOpen, User, Menu, X } from 'lucide-react';
import { User as UserType } from '../types';

interface LayoutProps {
  children: ReactNode;
  currentView: string;
  onViewChange: (view: string) => void;
  user: UserType | null;
  onLogout: () => void;
}

export function Layout({ children, currentView, onViewChange, user, onLogout }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'dashboard', label: 'Dashboard', icon: User },
  ];

  return (
    <div className="min-h-screen bg-secondary-50">
      <header className="sticky top-0 z-50 bg-white border-b border-secondary-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onViewChange('home')}>
              <div className="p-2 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-secondary-900">Auto Mechanics</h1>
                <p className="text-xs text-secondary-500 -mt-0.5">Academy</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onViewChange(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      isActive
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm font-medium text-secondary-900">{user.name}</p>
                    <p className="text-xs text-secondary-500">{user.email}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-medium">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <button onClick={onLogout} className="text-sm text-secondary-600 hover:text-secondary-900">
                    Logout
                  </button>
                </div>
              ) : (
                <button onClick={() => onViewChange('login')} className="btn-primary">
                  Sign In
                </button>
              )}
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-secondary-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-secondary-200 bg-white">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => { onViewChange(item.id); setMobileMenuOpen(false); }}
                    className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                      isActive ? 'bg-primary-50 text-primary-600' : 'text-secondary-600 hover:bg-secondary-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
              {user ? (
                <div className="pt-3 border-t border-secondary-200">
                  <p className="text-sm font-medium text-secondary-900">{user.name}</p>
                  <button onClick={() => { onLogout(); setMobileMenuOpen(false); }} className="text-sm text-secondary-600 hover:text-secondary-900 mt-2">
                    Logout
                  </button>
                </div>
              ) : (
                <button onClick={() => { onViewChange('login'); setMobileMenuOpen(false); }} className="w-full btn-primary mt-2">
                  Sign In
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-secondary-900 text-secondary-300 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-primary-400" />
              <span className="font-display font-semibold text-white">Auto Mechanics Academy</span>
            </div>
            <p className="text-sm text-secondary-400">Comprehensive automotive education for aspiring mechanics</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
