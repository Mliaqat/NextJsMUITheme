import { useState, useEffect } from "react";
// next
import { useRouter } from "next/router";
// hooks
import useAuth from "../hooks/useAuth";
// components
import Login from "../pages/auth/login";
import LoadingScreen from "@root/components/LoadingScreen";

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
    return <Login />;
  }

  return <>{children}</>;
}
