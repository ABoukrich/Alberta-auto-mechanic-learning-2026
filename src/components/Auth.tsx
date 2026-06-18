import { useState } from 'react';
import { Wrench, Mail, Lock, User, ArrowLeft } from 'lucide-react';

interface AuthProps {
  mode: 'login' | 'register';
  onViewChange: (view: string, data?: unknown) => void;
  onLogin: (email: string, password: string) => Promise<boolean>;
  onRegister: (name: string, email: string, password: string) => Promise<boolean>;
}

export function Auth({ mode, onViewChange, onLogin, onRegister }: AuthProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'login') {
        const success = await onLogin(email, password);
        if (!success) setError('Invalid email or password');
        else onViewChange('home');
      } else {
        if (!name.trim()) { setError('Please enter your name'); setLoading(false); return; }
        if (password !== confirmPassword) { setError('Passwords do not match'); setLoading(false); return; }
        if (password.length < 6) { setError('Password must be at least 6 characters'); setLoading(false); return; }

        const success = await onRegister(name, email, password);
        if (!success) setError('Email already exists');
        else onViewChange('home');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    onViewChange(mode === 'login' ? 'register' : 'login');
    setError('');
    setName(''); setEmail(''); setPassword(''); setConfirmPassword('');
  };

  return (
    <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 mb-4">
            <Wrench className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-display font-bold text-secondary-900">{mode === 'login' ? 'Welcome Back' : 'Create Account'}</h1>
          <p className="text-secondary-500 mt-2">{mode === 'login' ? 'Sign in to track your progress' : 'Start your automotive learning journey'}</p>
        </div>

        <div className="card p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label htmlFor="name" className="label">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                  <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="input pl-10" placeholder="John Doe" required />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="label">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input pl-10" placeholder="you@example.com" required />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="label">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input pl-10" placeholder="Enter your password" required minLength={6} />
              </div>
            </div>

            {mode === 'register' && (
              <div>
                <label htmlFor="confirmPassword" className="label">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                  <input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="input pl-10" placeholder="Confirm your password" required />
                </div>
              </div>
            )}

            {error && <div className="p-3 rounded-lg bg-error-50 border border-error-200 text-error-700 text-sm">{error}</div>}

            <button type="submit" disabled={loading} className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-secondary-200 text-center">
            <p className="text-secondary-600">
              {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button onClick={toggleMode} className="text-primary-600 hover:text-primary-700 font-medium">
                {mode === 'login' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>

        <button onClick={() => onViewChange('home')} className="w-full mt-4 flex items-center justify-center gap-2 text-secondary-500 hover:text-secondary-700 text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
      </div>
    </div>
  );
}
