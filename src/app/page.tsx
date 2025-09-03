import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  Headphones,
  Trophy,
  Play,
  Star,
  Calendar,
  Target,
  ChevronRight,
} from 'lucide-react';

export default function Dashboard() {
  // Mock data
  const userStats = {
    totalWords: 1247,
    wordsLearned: 892,
    listeningHours: 23.5,
    currentStreak: 15,
    todayGoal: 20,
    todayProgress: 12,
  };

  const recentLessons = [
    {
      id: 1,
      title: 'Business English Vocabulary',
      type: 'vocabulary',
      progress: 85,
      time: '15 min',
    },
    {
      id: 2,
      title: 'Daily Conversation Listening',
      type: 'listening',
      progress: 60,
      time: '20 min',
    },
    { id: 3, title: 'Academic Words Set 3', type: 'vocabulary', progress: 100, time: 'Completed' },
  ];

  const todayActivities = [
    { id: 1, title: 'Morning Vocabulary Review', type: 'vocabulary', words: 15, completed: true },
    { id: 2, title: 'Podcast: Tech News', type: 'listening', duration: '12 min', completed: true },
    { id: 3, title: 'IELTS Vocabulary Set 5', type: 'vocabulary', words: 20, completed: false },
    {
      id: 4,
      title: 'Business Conversation',
      type: 'listening',
      duration: '15 min',
      completed: false,
    },
  ];

  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium opacity-90">Words Learned</CardTitle>
              <BookOpen className="w-5 h-5 opacity-75" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">{userStats.wordsLearned}</div>
            <p className="text-xs opacity-75">out of {userStats.totalWords} total</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium opacity-90">Listening Hours</CardTitle>
              <Headphones className="w-5 h-5 opacity-75" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">{userStats.listeningHours}</div>
            <p className="text-xs opacity-75">this month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium opacity-90">Current Streak</CardTitle>
              <Trophy className="w-5 h-5 opacity-75" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">{userStats.currentStreak}</div>
            <p className="text-xs opacity-75">days in a row</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium opacity-90">Today Goal</CardTitle>
              <Target className="w-5 h-5 opacity-75" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">
              {userStats.todayProgress}/{userStats.todayGoal}
            </div>
            {/* <Progress
              value={(userStats.todayProgress / userStats.todayGoal) * 100}
              className="mt-2 h-2"
            /> */}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Learning Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Continue Learning</CardTitle>
              <CardDescription>Pick up where you left off</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button className="h-20 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-8 h-8" />
                  <div className="text-left">
                    <div className="font-semibold">Vocabulary Practice</div>
                    <div className="text-xs opacity-90">15 new words</div>
                  </div>
                </div>
              </Button>

              <Button className="h-20 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                <div className="flex items-center space-x-3">
                  <Headphones className="w-8 h-8" />
                  <div className="text-left">
                    <div className="font-semibold">Listening Practice</div>
                    <div className="text-xs opacity-90">Daily podcast</div>
                  </div>
                </div>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Lessons */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Lessons</CardTitle>
              <CardDescription>Your learning progress</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentLessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        lesson.type === 'vocabulary'
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-green-100 text-green-600'
                      }`}
                    >
                      {lesson.type === 'vocabulary' ? (
                        <BookOpen className="w-5 h-5" />
                      ) : (
                        <Headphones className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{lesson.title}</h4>
                      <p className="text-sm text-gray-500">{lesson.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <div className="text-sm font-medium">{lesson.progress}%</div>
                      {/* <Progress value={lesson.progress} className="w-20 h-2" /> */}
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Content */}
        <div className="space-y-6">
          {/* Today's Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Plan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {todayActivities.map((activity) => (
                <div
                  key={activity.id}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    activity.completed ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        activity.completed ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    >
                      {activity.completed && <Star className="w-3 h-3 text-white" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-gray-500">
                        {activity.type === 'vocabulary'
                          ? `${activity.words} words`
                          : activity.duration}
                      </p>
                    </div>
                  </div>
                  {!activity.completed && (
                    <Button size="sm" variant="outline" className="h-7">
                      <Play className="w-3 h-3" />
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievement */}
          <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-orange-800">
                <Trophy className="w-5 h-5" />
                <span>Achievement Unlocked!</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-orange-900 mb-1">Vocabulary Master</h3>
                <p className="text-sm text-orange-700">Learned 1000+ words!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
