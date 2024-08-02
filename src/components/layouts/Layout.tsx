/* eslint-disable react/prop-types */
interface LayoutProps {
    children: any;
}
const Layout = ({ children }: LayoutProps) => {
    return (
        <main className="max-w-[90rem] mx-auto relative">
            {children}
        </main>
    )
}

export default Layout;