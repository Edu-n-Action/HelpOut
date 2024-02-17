import Navbar from "@/components/homepage/navbar/Navbar";
import { AuthContextProvider } from "@/Context/PersonalAuthContext"
export const metadata = {
  title: "Edunity",
  description: "Education opportunity for all",
};

export default function RootLayout({ children }) {
  return (
    <AuthContextProvider>
        {children}
    </AuthContextProvider>
  );
}