import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer";
import { Sidebar } from "../components/layout/Sidebar"
import MobileHeader from "../components/layout/MobileHeader";
import { useDeviceType } from "../composables/useDeviceType";

interface DefaultLayoutProps {
    children: React.ReactElement
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {

    const deviceType = useDeviceType();
    return (
        <div className="h-screen flex flex-col bg-[#fbfbfb]">
            {
                deviceType === 'mobile' ? <MobileHeader /> : <Header />
            }
            <div className="flex flex-1 overflow-hidden">
                {
                    deviceType !== 'mobile' &&
                    <Sidebar />
                }
                <div className="flex-1 overflow-y-auto bg-white">
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;