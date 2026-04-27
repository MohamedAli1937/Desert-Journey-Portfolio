import { ReactNode } from 'react';

// Define the type for the props expected by this component
interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="main-container">
      <div className="content-wrapper">
        {/* Whatever page we are on will be injected right here */}
        {children}
      </div>
    </main>
  );
}
