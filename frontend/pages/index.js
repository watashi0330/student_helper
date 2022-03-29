import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
   return (
      <div className="flex">
         <Sidebar />
         <div className="flex-grow h-screen">
            Main
         </div>
      </div>
   )
}