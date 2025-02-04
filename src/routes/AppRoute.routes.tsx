import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../pages/404/NotFound";
import HomeLayout from "../pages/_layouts/HomeLayout/HomeLayout";
import ChatBot from "../pages/home/ChatBot/ChatBot";
import paths from "./AppRoute.model";

export const Router = () => {

  return (
    <Routes>
      <Route path={paths.root} element={<HomeLayout />}>
        <Route path={paths.root} element={<Navigate to={paths.chatBot.root} replace />} />
        <Route index path={paths.chatBot.root} element={<ChatBot />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};