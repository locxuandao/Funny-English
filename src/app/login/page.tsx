'use client';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Zap, Sparkles, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.replace('/');
    }
  }, [session, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-indigo-600" />
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main login card */}
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-lg border-white/20 shadow-2xl p-2">
        <CardHeader className="flex flex-col items-center text-center gap-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Welcome Back!
            </CardTitle>
            <CardDescription className="text-base">
              Continue your English learning journey
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Login button */}
          <Button
            onClick={() => signIn('google', { redirect: false })}
            variant="outline"
            size="lg"
            className="w-full h-12 group relative hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:border-indigo-300 transition-all duration-300 transform hover:scale-105 hover:cursor-pointer"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="font-medium">Continue with Google</span>
          </Button>

          <Separator className="my-6" />

          {/* Features showcase */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-center text-muted-foreground">
              Why choose our platform?
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-green-800">Interactive Lessons</p>
                  <p className="text-xs text-green-600">Learn through engaging activities</p>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Popular
                </Badge>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-800">Quick Progress</p>
                  <p className="text-xs text-blue-600">See results in just weeks</p>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  Fast
                </Badge>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-purple-800">Fun Learning</p>
                  <p className="text-xs text-purple-600">Gamified experience</p>
                </div>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  Fun
                </Badge>
              </div>
            </div>
          </div>

          {/* Footer text */}
          <div className="text-center pt-4">
            <p className="text-xs text-muted-foreground">
              By continuing, you agree to our{' '}
              <span className="underline hover:text-primary cursor-pointer">Terms of Service</span>
            </p>
          </div>
        </CardContent>
      </Card>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
