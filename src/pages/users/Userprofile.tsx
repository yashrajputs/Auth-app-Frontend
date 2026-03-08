import { useState } from "react";
import useAuth from "@/auth/store";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import type User from "@/models/User";

function Userprofile() {
  const [isEditing, setIsEditing] = useState(false);
  const user = useAuth((state) => state.user) as User | null;

  const loading = !user;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex justify-between items-center"
        >
          <div>
            <h1 className="text-4xl font-bold">User Profile</h1>
            <p className="text-slate-300">Manage your account information</p>
          </div>

          {!loading && (
            <Button onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? "Cancel" : "Edit Profile"}
            </Button>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Profile Card */}
          <Card className="bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl shadow-xl">
            <CardContent className="flex flex-col items-center text-center p-6 gap-4">

              {loading ? (
                <Skeleton className="h-24 w-24 rounded-full" />
              ) : (
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Avatar className="h-24 w-24 border-4 border-white/20">
                    <AvatarImage src={user?.image} />
                    <AvatarFallback>
                      {user?.name?.charAt(0) ?? user?.email?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>
              )}

              {loading ? (
                <>
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-40" />
                </>
              ) : (
                <>
                  <h2 className="text-xl font-semibold">
                    {user?.name ?? "Unnamed User"}
                  </h2>
                  <p className="text-slate-300">{user?.email}</p>
                </>
              )}

            </CardContent>
          </Card>

          {/* Account Info */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl shadow-xl">

              <CardHeader>
                <CardTitle>Account Information</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6 text-slate-300">

                {loading ? (

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Skeleton className="h-5 w-48" />
                    <Skeleton className="h-5 w-48" />
                    <Skeleton className="h-5 w-40" />
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-5 w-48" />
                    <Skeleton className="h-5 w-48" />
                  </div>

                ) : (

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* ID */}
                    <div>
                      <p className="text-sm text-slate-400">User ID</p>
                      <p className="text-lg break-all">{user?.id}</p>
                    </div>

                    {/* Email */}
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <p className="text-lg">{user?.email}</p>
                    </div>

                    {/* Provider */}
                    <div>
                      <p className="text-sm text-slate-400">Provider</p>
                      <p className="text-lg capitalize">{user?.provider}</p>
                    </div>

                    {/* Status */}
                    <div>
                      <p className="text-sm text-slate-400">Account Status</p>
                      <p className="text-lg">
                        {user?.enabled ? "Active" : "Disabled"}
                      </p>
                    </div>

                    {/* Created */}
                    <div>
                      <p className="text-sm text-slate-400">Created At</p>
                      <p className="text-lg">{user?.createdAt}</p>
                    </div>

                    {/* Updated */}
                    <div>
                      <p className="text-sm text-slate-400">Updated At</p>
                      <p className="text-lg">{user?.updatedAt}</p>
                    </div>

                  </div>
                )}

                {!loading && !isEditing && (
                  <div className="flex gap-3">
                    <Button>Update Profile</Button>
                    <Button variant="outline">Security Settings</Button>
                  </div>
                )}

                {/* Edit Mode */}
                {!loading && isEditing && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >

                    <div>
                      <label className="text-sm text-slate-400">Name</label>
                      <input
                        defaultValue={user?.name}
                        className="w-full mt-1 rounded-lg bg-white/10 border border-white/20 p-2"
                      />
                    </div>

                    <div>
                      <label className="text-sm text-slate-400">Email</label>
                      <input
                        defaultValue={user?.email}
                        className="w-full mt-1 rounded-lg bg-white/10 border border-white/20 p-2"
                      />
                    </div>

                    <div className="flex gap-3">
                      <Button>Save Changes</Button>
                      <Button
                        variant="outline"
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </Button>
                    </div>

                  </motion.div>
                )}

              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Userprofile;

