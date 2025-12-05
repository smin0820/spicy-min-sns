import { Navigate, Route, Routes } from "react-router";
import ForgetPasswordPage from "./pages/forgetPassword";
import HomePage from "./pages/home";
import PostDetailPage from "./pages/postDetail";
import ProfilePage from "./pages/profile";
import ResetPasswordPage from "./pages/resetPassword";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import GlobalLayout from "./components/layout/globalLayout";

export default function RootRouter() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/post/:postId" element={<PostDetailPage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
}
