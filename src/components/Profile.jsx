import { MdVerified } from "react-icons/md";
import { CiLocationOn, CiGlobe  } from "react-icons/ci";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useState } from "react";
import AddPost from "./AddPost";
  
const Profile = () => {
    const [focused, setFoucesd] = useState("photos")
    const [createPost, setCreatePost] = useState(false)


    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div className="flex flex-row capitalize min-h-[100vh]">
            <aside className=" bg-violet-100 w-1/4 " />
            <div className="w-3/4 relative bg-slate-200">
                <img className=" bg-cover max-h-[150px] w-full" src="nsplsh_de2d2dc6ae3d4a3f9fd98d757ed79bb4~mv2.jpg" alt="" />

                <div className=" bg-white rounded-2xl w-[25%] h-[500px] absolute z-40 top-24 left-8 text-center">
                    <img className="p-3 rounded-full max-h-28 max-w-28 h-44 bg-contain mx-auto " src="Makeup-Artist-Website-Images-1440x960.jpg" alt="" />
                    <h3 className="flex items-center justify-center gap-2">victoria jenner <MdVerified color="purple" /></h3>
                    <h4 className=" text-slate-500 p-3">makeup artist</h4>
                    <div className="flex justify-around w-full p-3 ">
                        <div>
                            <h4 className=" text-slate-400 p-2">clients</h4>
                            <h3 >120</h3>
                        </div>
                        <div>
                            <h4 className=" text-slate-400 p-2 ">rate</h4>
                            <h3>4.2</h3>
                        </div>
                    </div>
                    <p className=" text-[12px] p-2 text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aliquid cupiditate, aut, nisi quibusdam distinctio, </p>
                    <h4 className="flex items-center justify-center gap-2 p-2 text-violet-600"><CiLocationOn />google map location</h4>
                    <h4 className="flex items-center justify-center gap-2 p-2 text-violet-600"><CiGlobe />google map location</h4>
                </div>
                <div className="flex flex-col w-[70%] ml-auto">
                    <nav className="flex flex-row justify-between w-full p-2">
                        <div onClick={() => setFoucesd("photos")} className={` text-purple-600 cursor-pointer  ${focused == "photos" ? "border-b-4 rounded border-solid border-x-slate-200 border-t-slate-200" : ""} p-2 `}>photos</div>
                        <div onClick={() => setFoucesd("reels")} className={` text-purple-600 cursor-pointer ${focused == "reels" ? "border-b-4 rounded border-solid border-x-slate-200 border-t-slate-200" : ""} p-2 `}>reels</div>
                        <div className="p-2 flex flex-row gap-2 basis-1/2">
                            <button onClick={()=>setCreatePost(true)} className="cursor-pointer border-none bg-purple-700 text-white rounded p-2 w-[50%]">add post</button>
                            <button className="cursor-pointer border-purple-700 text-purple-700 rounded p-2 w-[50%]">edit profile</button>
                        </div>
                    </nav>
                    <div className="flex flex-row flex-wrap gap-3">
                        {focused == "photos" ? <>
                            <img onClick={onOpen} className="w-[250px] h-[250px] rounded cursor-pointer" src="Makeup-Artist-Website-Images-1440x960.jpg" alt="" />
                            <img onClick={onOpen} className="w-[250px] h-[250px] rounded cursor-pointer" src="Makeup-Artist-Website-Images-1440x960.jpg" alt="" />
                            <img onClick={onOpen} className="w-[250px] h-[250px] rounded cursor-pointer" src="Makeup-Artist-Website-Images-1440x960.jpg" alt="" />
                            <img onClick={onOpen} className="w-[250px] h-[250px] rounded cursor-pointer" src="Makeup-Artist-Website-Images-1440x960.jpg" alt="" />
                            <img onClick={onOpen} className="w-[250px] h-[250px] rounded cursor-pointer" src="Makeup-Artist-Website-Images-1440x960.jpg" alt="" />
                            <img onClick={onOpen} className="w-[250px] h-[250px] rounded cursor-pointer" src="Makeup-Artist-Website-Images-1440x960.jpg" alt="" />
                            <img onClick={onOpen} className="w-[250px] h-[250px] rounded cursor-pointer" src="Makeup-Artist-Website-Images-1440x960.jpg" alt="" />
                            <img onClick={onOpen} className="w-[250px] h-[250px] rounded cursor-pointer" src="Makeup-Artist-Website-Images-1440x960.jpg" alt="" />
                            <img onClick={onOpen} className="w-[250px] h-[250px] rounded cursor-pointer" src="Makeup-Artist-Website-Images-1440x960.jpg" alt="" />
                        </> :
                            <>
                                <img onClick={onOpen} className="w-[250px] h-[350px] rounded-xl cursor-pointer" src="profile-2.jpg" alt="" />
                                <img onClick={onOpen} className="w-[250px] h-[350px] rounded-xl cursor-pointer" src="profile-2.jpg" alt="" />
                                <img onClick={onOpen} className="w-[250px] h-[350px] rounded-xl cursor-pointer" src="profile-2.jpg" alt="" />
                            </>
                        }
                    </div>
                </div>
            </div>
            <Modal hideCloseButton className=" bg-[#ffffffad]" size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent  >
                    {(onClose) => (
                        <>
                            <ModalHeader className=" bg-[#ffffff00] flex flex-row text-left items-start pb-0">
                                <div className="bg-[#ffffff00] flex flex-row text-left items-center justify-center gap-2">
                                    <img className=" rounded-full max-h-16 max-w-16 h-44 bg-contain mx-auto " src="Makeup-Artist-Website-Images-1440x960.jpg" alt="" />
                                    <h3 className="flex items-center justify-center gap-2">victoria jenner <MdVerified color="purple" /></h3>
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <img className=" rounded" src="Makeup-Artist-Website-Images-1440x960.jpg" alt="" />
                            </ModalBody>
                            <ModalFooter className="flex flex-col text-slate-700">
                                <h4>2,222 likes</h4>
                                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore asperiores dignissimos</h4>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            {createPost && <AddPost createPost={createPost} setCreatePost={setCreatePost} />}
        </div>
    );
};

export default Profile