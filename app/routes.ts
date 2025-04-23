import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("auth", [
    route("connexion", "routes/login.tsx"),
    route("inscription", "routes/register.tsx"),
  ]),
  ...prefix("compte", [route("profil", "routes/profile.tsx")]),
] satisfies RouteConfig;
