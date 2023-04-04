// guards
import AuthGuard from "@root/guards/AuthGuard";
// components
import MainLayout from "./main";
import DashboardLayout from "./dashboard";
import LogoOnlyLayout from "./LogoOnlyLayout";
import GuestGuard from "@root/guards/GuestGuard";

// ----------------------------------------------------------------------

export default function Layout({ variant = "dashboard", children }: any) {
  if (variant === "logoOnly") {
    return <LogoOnlyLayout> {children} </LogoOnlyLayout>;
  }

  if (variant === "main") {
    return (
      <GuestGuard>
        <MainLayout>{children}</MainLayout>
      </GuestGuard>
    );
  }

  return (
    <AuthGuard>
      <DashboardLayout> {children} </DashboardLayout>
    </AuthGuard>
  );
}
