import { useState, useEffect } from "react";
// next
import { useRouter } from "next/router";
// hooks
import useAuth from "../hooks/useAuth";
// components
import LoadingScreen from "@root/components/LoadingScreen";
import Layout from "@root/layouts";
import LoginForm from "@root/sections/auth/login/LoginForm";

// ----------------------------------------------------------------------

export default function AuthGuard({ children }: any) {
  const { isAuthenticated, isInitialized } = useAuth();

  const { pathname, push } = useRouter();

  const [requestedLocation, setRequestedLocation] = useState<any>(null);

  useEffect(() => {
    if (requestedLocation && pathname !== requestedLocation) {
      setRequestedLocation(null);
      push(requestedLocation);
    }
  }, [pathname, push, requestedLocation]);

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return (
      <Layout variant="auth" title="login">
        <LoginForm />
      </Layout>
    );
  }

  return <>{children}</>;
}
