import { Metadata } from "next";
import Navbar from "./Navbar/navbar";
import Suggetion from "./Suggetion/suggetion";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard for the app",
}

export default function Dashboard({ children }: { children: React.ReactNode,}) {
    return (
        <div className="flex">
            {/* navbar section */}
            <div className="w-[20%] h-[calc(100vh_-_41px)]">
                <Navbar />
            </div>
            {/* redirect page will be here */}
            <div className="w-[80%] h-[calc(100vh_-_41px)]">
                {children}
            </div>
            {/* suggetion section will be here */}
            {/* <div className="w-[25%] h-[calc(100vh_-_41px)]">
                <Suggetion />
            </div> */}
        </div>
    )
}