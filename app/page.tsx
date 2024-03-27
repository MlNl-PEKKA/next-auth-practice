import { LoginForm } from "@/components/login-form";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <LoginForm />;
    </Suspense>
  );
}
