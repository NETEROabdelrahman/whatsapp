import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,Textarea, useDisclosure} from "@nextui-org/react";
import { MdInsertPhoto, MdOutlineSlowMotionVideo  } from "react-icons/md";
import { CiLink } from "react-icons/ci";

const AddPost = ({ createPost, setCreatePost }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <Modal hideCloseButton className=" bg-[#ffffffad]" size="2xl" isOpen={createPost} onOpenChange={onOpenChange}>
            <ModalContent  >
                {(onClose) => (
                    <>
                        <ModalHeader className=" bg-[#ffffff00] flex flex-row justify-between text-left items-start pb-0">
                            <h3 className="text-center gap-2">Create Post </h3>
                            <button className="rounded-full cursor-pointer text-white p-2 border-none bg-violet-500" onClick={() => setCreatePost(false)}>x</button>
                        </ModalHeader>
                        <ModalBody>
                            <div className="bg-violet-100 rounded-lg p-3">
                                <Textarea
                                    isRequired
                                    size="lg"
                                    placeholder="you would love to create a post here"
                                    type="text"
                                    className="bg-violet-100 rounded border-none "
                                />
                                <div className="flex flex-row items-center gap-4 p-2 mt-1">
                                    <span className="flex flex-row items-center justify-center gap-2">
                                        <MdInsertPhoto color="indigo" />
                                        <p>add photo</p>
                                    </span>
                                    <span className="flex flex-row items-center justify-center gap-2">
                                        <MdOutlineSlowMotionVideo color="indigo" />
                                        <p>add reel</p>
                                    </span>
                                    <span className="flex flex-row items-center justify-center gap-2">
                                        <CiLink color="indigo" />
                                        <p>add link</p>
                                    </span>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter className="flex flex-row justify-between text-slate-700">
                            <button className="cursor-pointer border-none bg-purple-700 text-white rounded p-2 w-[50%]">Discard</button>
                            <button className="cursor-pointer border-purple-700 text-purple-700 rounded p-2 w-[50%]">Publish</button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AddPost