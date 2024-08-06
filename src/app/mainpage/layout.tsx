import NavBar from '@/app/components/navbar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-custom h-screen">
            <NavBar />
            <div className="">{children}</div>
        </div>
    );
}
