import React, { useState, useEffect } from 'react';
import SideNavMain from "./includes/SideNavMain"
import TopNav from "./includes/TopNav"
import { usePathname } from "next/navigation"
import { motion, Variants } from 'framer-motion';
import { useUser } from "@/app/context/user";
//import TechMessage from '../components/TechMessage';
import { PlayerProvider } from '@/app/context/playerContext'; 




export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const userContext = useUser();   
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const login = useUser();

    useEffect(() => {
        if (!userContext?.user) {
            setIsModalVisible(true);
        }
    }, [userContext]);

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
		<>
			<TopNav params={{ id: userContext?.user?.id as string }} />

		<div className="flex  mx-auto w-full px-0">
			
			<div className="flex justify-start  w-auto md:w-300 px-0">
			<motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                      className="hidden md:flex justify-start  w-auto md:w-300 px-0"

            >
				{/*<SideNavMain />*/}
				{/*<MainComponentsFilter />*/}
				</motion.div>
			</div>

            <PlayerProvider>
			<div className="flex justify-center w-full  px-0">
			<motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center px-0"
            >
				{children}
				</motion.div>
			</div>
            </PlayerProvider>

			<div className="hidden sm:block md:flex justify-end w-[300px] pr-[20px]">

			<motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className=" md:flex justify-end  w-[300px] "
            >
    			{/*	TOP 100 <RightSideBar /> 
                <TechMessage />*/}

              
				
                </motion.div>
                
			</div>

            {/* Модальное окно для незалогиненных пользователей */}
            {isModalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
                    <div className="bg-[#15191F] p-2 rounded-xl shadow-lg relative md:w-[400px] w-[350px] mx-auto">

                        {/* Кнопка закрытия крестик */}
                        <button onClick={closeModal} className="absolute top-4 left-5 text-white">
                            ✕
                        </button>

                        {/* Изображение сверху */}
                        <div className="flex justify-center mb-4">
                            <img src="/images/log.png" alt="Login Prompt" className="w-full h-[150px] rounded-xl" />
                        </div>

                        {/* Текст сообщения */}
                        <p className="text-white text-center pb-4 mt-4">
                            Sacral Track - music network marketplace <br />
                            for music artists and lovers. <br /><br />
                            For All: Listen music for free, likes, comments, share. <br /><br />
                            For Artists: Release a track, withdraw royalties to visa/mastercard. <br /><br />
                            <span className='text-[#20DDBB]'>To open and listen a tracks, please log in.</span>
                        
                            </p>


                       

                    </div>
                </div>
            )}



              {/* Круглая кнопка "Support" */}
              <motion.a
                        href="http://t.me/sashaplayra"
                        target="_blank"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="fixed bottom-5 right-5 bg-[#] text-white rounded-full w-20 h-20 flex items-center justify-center cursor-pointer hover:bg-[#] focus:outline-none"
                    >   <div className="flex flex-col items-center">
                            <img src="/images/tel.svg" className="w-4 h-4 mb-1" alt="" />
                            <span className="text-[10px]">Support</span>
                        </div>
                  
             </motion.a>

		</div>
		</>
    )
}


