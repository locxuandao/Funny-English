'use client';

import { SessionProvider, useSession } from 'next-auth/react';
import { ComponentType, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ReactNode } from 'react';
import {
  BookOpen,
  Headphones,
  Trophy,
  TrendingUp,
  Target,
  Clock,
  Menu,
  User,
  Settings,
  LogOut,
} from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import './globals.css';

function NavigationItem({
  icon: Icon,
  label,
  href,
  isActive,
  onClick,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  href: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
        isActive
          ? 'bg-indigo-100 text-indigo-700 border-l-4 border-indigo-500'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </button>
  );
}

function AppLayout({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Mock user stats for header
  const userStats = {
    currentStreak: 15,
    level: 'Intermediate',
  };

  // Don't show sidebar on login page
  if (pathname === '/login' || status === 'loading' || !session) {
    return <div>{children}</div>;
  }

  const navigationItems = [
    { icon: TrendingUp, label: 'Overview', href: '/' },
    { icon: BookOpen, label: 'Vocabulary', href: '/vocabulary' },
    { icon: Headphones, label: 'Listening', href: '/listening' },
    { icon: Trophy, label: 'Progress', href: '/progress' },
    { icon: Target, label: 'Goals', href: '/goals' },
  ];

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  const handleLogout = () => {
    router.push('/api/auth/signout');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-white shadow-xl transition-transform duration-300 z-50 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64`}
      >
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">EnglishPro</h1>
          </div>

          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <NavigationItem
                key={item.href}
                icon={item.icon}
                label={item.label}
                href={item.href}
                isActive={pathname === item.href}
                onClick={() => handleNavigation(item.href)}
              />
            ))}
          </nav>

          <Separator className="my-6" />

          <div className="space-y-2">
            <NavigationItem
              icon={User}
              label="Profile"
              onClick={() => handleNavigation('/profile')}
              isActive={pathname === '/profile'}
              href="#"
            />
            <NavigationItem
              icon={Settings}
              label="Settings"
              onClick={() => handleNavigation('/settings')}
              isActive={pathname === '/settings'}
              href="#"
            />
            <NavigationItem
              icon={LogOut}
              label="Logout"
              onClick={handleLogout}
              href="#"
              isActive={false}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <Menu className="w-5 h-5" />
              </Button>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Good morning, {session?.user?.name || 'User'}!
                </h2>
                <p className="text-gray-600">Ready to continue your learning journey?</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <Clock className="w-3 h-3 mr-1" />
                {userStats.currentStreak} day streak
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                {userStats.level}
              </Badge>
            </div>
          </div>
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <AppLayout>{children}</AppLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
