import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Button from "../components/common/Button";

const updateProfileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
});

type UpdateProfileFormData = z.infer<typeof updateProfileSchema>;

export default function Profile() {
  const { user, updateProfile, isUpdateProfileLoading } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateProfileFormData>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: user?.name || "",
    },
  });

  const onSubmit = async (data: UpdateProfileFormData) => {
    await updateProfile(data);
    setIsEditing(false);
  };

  const handleCancel = () => {
    reset();
    setIsEditing(false);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4">
          <h1 className="text-xl font-semibold mb-4">Profile</h1>

          <div className="border p-4 rounded max-w-sm">
            {isEditing ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    {...register("name")}
                    className="w-full border p-2 rounded"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    type="submit"
                    isLoading={isUpdateProfileLoading}
                    className="px-4 py-2"
                  >
                    Save
                  </Button>
                  <Button
                    type="button"
                    onClick={handleCancel}
                    variant="secondary"
                    className="px-4 py-2"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            ) : (
              <>
                <p>
                  <strong>Name:</strong> {user?.name}
                </p>
                <p>
                  <strong>Email:</strong> {user?.email}
                </p>
                <Button
                  onClick={() => setIsEditing(true)}
                  className="mt-4 px-4 py-2"
                >
                  Edit Profile
                </Button>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
