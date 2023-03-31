import { useState, useEffect } from "react";
// next
import { useRouter } from "next/router";
// hooks
import useAuth from "../hooks/useAuth";
import Login from "../pages/auth/login";
// components
// import LoadingScreen from "../components/LoadingScreen";

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
    // return <LoadingScreen />;
    return <p>LOADING...</p>;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  return <>{children}</>;
}
