import { Metadata } from 'next';
import { ReactNode } from 'react';


export const metadata: Metadata = {
  title: 'YOOM',
  description: 'A workspace for your team, powered by Stream Chat and Clerk.',
};

const RootLayout = ({ children }: Readonly<{children: ReactNode}>) => {
  return (
    <main className="relative">
      

      <div className="flex">
        
        
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-18 max-md:pb-14 ">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
