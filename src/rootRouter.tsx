import { Navigate, Route, Routes } from "react-router";
import ForgetPasswordPage from "./pages/forgetPassword";
import HomePage from "./pages/home";
import PostDetailPage from "./pages/postDetail";
import ProfilePage from "./pages/profileDetail";
import ResetPasswordPage from "./pages/resetPassword";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import GlobalLayout from "./components/layout/globalLayout";
import GuestOnlyLayout from "./components/layout/guestOnlyLayout";
import MemberOnlyLayout from "./components/layout/memberOnluLayout";

export default function RootRouter() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route element={<GuestOnlyLayout />}>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
        </Route>

        <Route element={<MemberOnlyLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:postId" element={<PostDetailPage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Route>

        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
}
