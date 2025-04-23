import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, ModalTrigger } from "~/components/profile/modal";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

import { useAuthContext } from "~/context/auth-context";
import { profileSchema, type ProfileFormData } from "~/validations/profile-schema";

const Profile = () => {
  const { user, updateUserInfo } = useAuthContext();
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(user?.profilePicture || null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: user?.username || "",
      email: user?.email || "",
      bio: user?.bio || "",
    },
  });

  // Handle profile picture change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setProfilePicture(file);
      setImagePreview(URL.createObjectURL(file)); // Display image preview
    }
  };

  // Form submission handler
  const onSubmit = (data: ProfileFormData) => {
    // Update user information and profile picture here
    const updatedData = { ...data };
    if (profilePicture) {
      console.log(profilePicture);
    }
    console.log(updatedData); // Assuming this function updates the user info
    setIsModalOpen(false); // Close modal after update
  };

  useEffect(() => {
    // Reset the profile picture preview when the user changes
    if (user?.profilePicture) {
      setImagePreview(user.profilePicture);
    }
  }, [user?.profilePicture]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* User Info Section */}
      <div className="w-full max-w-3xl bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Mon Profil</h2>

        {/* Profile Picture */}
        <div className="flex justify-center mb-6 w-full">
          <div className="relative flex flex-col items-center justify-center w-full">
            <img
              src={imagePreview || "/default-profile.png"}
              alt="Profile Picture"
              className="w-32 h-32 rounded-full border-4 border-gray-300 object-cover"
            />
            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            {/* Instructions to click on the image */}
            <p className="text-center text-gray-500 mt-2 cursor-pointer">
              Cliquez pour changer l'image
            </p>
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold">{user?.username}</h3>
          <p className="text-gray-500">{user?.email}</p>
          <p className="text-gray-700 mt-2">{user?.bio}</p>
        </div>

        {/* Edit Button */}
        <div className="flex justify-center">
          <ModalTrigger onClick={() => setIsModalOpen(true)}>
            <Button>Editer Profil</Button>
          </ModalTrigger>
        </div>
      </div>

      {/* Modal for Profile Update */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Modifier Profil</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Profile Picture Change */}
          <div className="flex justify-center mb-6">
            <div className="relative flex flex-col justify-center items-center">
              <img
                src={imagePreview || "/default-profile.png"}
                alt="Profile Picture"
                className="w-32 h-32 rounded-full border-4 border-gray-300 object-cover"
              />
              {/* Hidden file input */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              {/* Instructions to click on the image */}
              <p className="text-center text-gray-500 mt-2 cursor-pointer">
                Cliquez pour changer l'image
              </p>
            </div>
          </div>

          {/* Username Input */}
          <div>
            <Input type="text" placeholder="Nom d'utilisateur" {...register("username")} />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <Input type="email" placeholder="Email" {...register("email")} />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Bio Input */}
          <div>
            <textarea
              placeholder="Bio"
              {...register("bio")}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>}
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Mettre à jour le profil
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Profile;
