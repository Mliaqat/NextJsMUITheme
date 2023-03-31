// guards
import AuthGuard from "@root/guards/AuthGuard";
// components
import MainLayout from "./main";
import DashboardLayout from "./dashboard";
import LogoOnlyLayout from "./LogoOnlyLayout";

// ----------------------------------------------------------------------

export default function Layout({ variant = "dashboard", children }: any) {
  if (variant === "logoOnly") {
    return <LogoOnlyLayout> {children} </LogoOnlyLayout>;
  }

  if (variant === "main") {
    return <MainLayout>{children}</MainLayout>;
  }

  return (
    <AuthGuard>
      <DashboardLayout> {children} </DashboardLayout>
    </AuthGuard>
  );
}
