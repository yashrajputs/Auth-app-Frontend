import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Userhome() {
  const [loading, setLoading] = useState(true);

  const stats = [
    { title: "Total Logins", value: "1,284" },
    { title: "Active Sessions", value: "23" },
    { title: "Projects", value: "12" },
    { title: "Notifications", value: "5" }
  ];

  const recentActivity = [
    { id: 1, action: "Logged in from new device", time: "2 minutes ago", type: "success" },
    { id: 2, action: "Password updated successfully", time: "1 hour ago", type: "success" },
    { id: 3, action: "New project created", time: "3 hours ago", type: "info" },
    { id: 4, action: "Session expires soon", time: "5 hours ago", type: "warning" },
    { id: 5, action: "Account verified", time: "1 day ago", type: "success" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const getActivityColor = (type: string) => {
    switch (type) {
      case "success": return "bg-green-500";
      case "warning": return "bg-yellow-500";
      case "info": return "bg-blue-500";
      default: return "bg-slate-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Welcome Back 👋</h1>
          <p className="text-slate-300">Here is a quick overview of your dashboard.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl shadow-xl">
                <CardHeader>
                  <CardTitle className="text-sm text-slate-300">
                    {stat.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  {loading ? (
                    <Skeleton className="h-8 w-20" />
                  ) : (
                    <p className="text-3xl font-semibold">{stat.value}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl shadow-xl h-full">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {loading ? (
                  <>
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-full" />
                  </>
                ) : (
                  recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full ${getActivityColor(activity.type)}`} />
                      <div className="flex-1">
                        <p className="text-slate-200">{activity.action}</p>
                        <p className="text-sm text-slate-400">{activity.time}</p>
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl shadow-xl h-full">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  New Project
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  View Notifications
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  Export Data
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Userhome;

