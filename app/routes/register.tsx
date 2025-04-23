import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { registerSchema, type RegisterFormData } from "~/validations/register-schema";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Register data", data);
  };
  return (
    <div className="min-h-screen flex">
      <section className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200">
        <div className="p-8">
          <h2 className="text-4xl font-bold mb-4">Rejoignez-nous !</h2>
          <p className="text-lg text-gray-600">
            Créez un compte pour découvrir et partager vos plus belles photos.
          </p>
        </div>
      </section>
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 bg-gradient-to-tr from-indigo-200 via-white to-indigo-100">
        <Card className="w-full max-w-md">
          <CardContent className="space-y-4">
            <div className="p-8 text-center md:hidden">
              <h2 className="text-4xl font-bold mb-4">Rejoignez-nous !</h2>
              <p className="text-lg text-gray-600">
                Créez un compte pour découvrir et partager vos plus belles photos.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input type="email" placeholder="Email" {...register("email")} />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <Input type="password" placeholder="Mot de passe" {...register("password")} />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Confirmez le mot de passe"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full">
                Inscription
              </Button>
            </form>
            <p className="text-sm text-center">
              Vous avez déjà un compte ?{" "}
              <Link to="/auth/connexion" className="text-blue-500 hover:underline">
                Connectez-vous
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Register;
