"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  HStack,
  VStack,
  Box,
  Text,
  Textarea,
  Button,
  Image,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { IoSendSharp } from "react-icons/io5";
import { PiUserThin } from "react-icons/pi";
import { CgClose } from "react-icons/cg";

const CustomModal = ({ isOpen, onClose }: any) => {
  const [postText, setPostText] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      const filesArray = Array.from(fileList);
      setImages((prevImages) => [...prevImages, ...filesArray]);
    }
  };

  const handleRemoveImage = (index: number) => {
    const filteredImages = images.filter((_, i) => i !== index);
    setImages(filteredImages);
  };

  const onPressPost = () => {
    console.log("Post text:", postText);
    console.log("Images:", images);
    onClose();
  };
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent maxWidth="900px" h="400px" pt="15px" borderRadius="30px">
        <ModalBody>
          <Flex justifyContent="space-between" flexDirection="column" w="100%">
            <HStack h="60px">
              <Image w="50px" h={"50px"} borderRadius="100%" as={PiUserThin} />
              <Box flex={1} maxH="50px" paddingLeft="15px">
                <VStack alignItems="flex-start" maxH="50px">
                  <Box
                    fontFamily="Nexa"
                    fontWeight={600}
                    fontSize="24px"
                    lineHeight="30px"
                  >
                    Forrest Skerman-Stevenson
                  </Box>
                  <Box
                    fontFamily="Montserrat"
                    fontWeight={600}
                    color="#404040"
                    fontSize="20px"
                    lineHeight="20px"
                  >
                    Posting to Merazonia
                  </Box>
                </VStack>
              </Box>
              <Flex
                w="40px"
                height="40px"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow={"1.8px 1.8px 13.5px #0000001A"}
                onClick={onClose}
              >
                <CgClose size="20px" color="#8F8F90" />
              </Flex>
            </HStack>
            <Textarea
              placeholder="What do you want to talk about?"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              resize="none"
              mt="40px"
              minH="140px"
              borderColor="transparent"
              borderBottomColor="#D7D7D7"
              borderRadius="0px"
            />
            <HStack
              h="100px"
              alignItems="center"
              pt="30px"
              justifyContent="space-between"
            >
              <HStack>
                {images.map((image, index) => (
                  <VStack
                    key={index}
                    w="100px"
                    h="80px"
                    bg="#F4F4F5"
                    borderRadius="10px"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="5px"
                    overflow="visible"
                  >
                    <Image
                      src={URL.createObjectURL(image)}
                      alt={`Image ${index}`}
                      width="100px"
                      height="80px"
                      objectFit="cover"
                      borderRadius="10px"
                    />
                    <Flex
                      bg="#EE2E12"
                      w="20px"
                      h="20px"
                      zIndex={500}
                      marginLeft="90px"
                      marginTop="-10px"
                      borderRadius="20px"
                      justifyContent="center"
                      alignItems="center"
                      onClick={() => handleRemoveImage(index)}
                    >
                      <CgClose size="15px" color="white" />
                    </Flex>
                  </VStack>
                ))}
                <Box
                  w="100px"
                  h="80px"
                  bg="#F4F4F5"
                  borderRadius="10px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  gap="5px"
                  overflow="hidden"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="5px"
                    style={{ cursor: "pointer" }}
                  >
                    <svg
                      style={{ margin: "0 auto" }}
                      width="26"
                      height="25"
                      viewBox="0 0 26 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 25C9.66113 25 6.52212 23.6998 4.16113 21.3389C1.80024 18.9779 0.5 15.8389 0.5 12.5C0.5 9.16113 1.80024 6.02212 4.16113 3.66113C6.52212 1.30024 9.66113 0 13 0C16.3389 0 19.4779 1.30024 21.8389 3.66113C24.1998 6.02212 25.5 9.16113 25.5 12.5C25.5 15.8389 24.1998 18.9779 21.8389 21.3389C19.4779 23.6998 16.3389 25 13 25ZM13 1.95312C7.18442 1.95312 2.45312 6.68442 2.45312 12.5C2.45312 18.3156 7.18442 23.0469 13 23.0469C18.8156 23.0469 23.5469 18.3156 23.5469 12.5C23.5469 6.68442 18.8156 1.95312 13 1.95312ZM17.577 14.6576C17.122 14.368 16.5184 14.5021 16.2289 14.9572C16.2168 14.9761 15.0015 16.8487 12.9512 16.8487C10.9009 16.8487 9.68555 14.9761 9.67349 14.9572C9.38394 14.5022 8.78037 14.3681 8.32534 14.6576C7.87031 14.9472 7.73618 15.5508 8.02573 16.0058C8.09839 16.1199 9.84077 18.8018 12.9512 18.8018C16.0616 18.8018 17.804 16.12 17.8766 16.0058C18.1662 15.5507 18.032 14.9472 17.577 14.6576ZM8.70312 8.05664C9.37729 8.05664 9.92383 8.60317 9.92383 9.27734C9.92383 9.95151 9.37729 10.498 8.70312 10.498C8.02895 10.498 7.48242 9.95151 7.48242 9.27734C7.48242 8.60317 8.02895 8.05664 8.70312 8.05664ZM16.0273 9.27734C16.0273 9.95151 16.5739 10.498 17.248 10.498C17.9222 10.498 18.4688 9.95151 18.4688 9.27734C18.4688 8.60317 17.9222 8.05664 17.248 8.05664C16.5739 8.05664 16.0273 8.60317 16.0273 9.27734Z"
                        fill="black"
                      />
                    </svg>
                    <Text
                      fontSize="15px"
                      lineHeight="18px"
                      fontFamily="Montserrat"
                      fontWeight="600"
                      color="rgba(64, 64, 64, 1)"
                    >
                      Emoji
                    </Text>
                  </Box>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                    multiple
                  />
                </Box>
                <Box
                  w="100px"
                  h="80px"
                  bg="#F4F4F5"
                  borderRadius="10px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  gap="5px"
                  overflow="hidden"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="5px"
                    style={{ cursor: "pointer" }}
                  >
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_95_242"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="25"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.0681763 0.568268H23.9318V24.4319H0.0681763V0.568268Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_95_242)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.996 22.5965C14.8822 22.5965 17.7684 22.5978 20.6546 22.5955C21.5222 22.5951 22.0906 22.0253 22.0947 21.1595C22.0974 20.6053 22.1038 20.0507 22.0883 19.497C22.0851 19.3833 22.0213 19.2357 21.9352 19.1656C20.8164 18.2544 19.6893 17.3537 18.5627 16.453C18.2267 16.1844 17.9829 16.1858 17.6359 16.4535C16.7509 17.1364 15.8695 17.8235 14.9839 18.5056C13.8257 19.3966 12.5291 19.3027 11.5074 18.2585C10.6049 17.3363 9.70153 16.4154 8.7986 15.4941C8.43238 15.1201 8.15921 15.1068 7.75495 15.4455C5.98987 16.9247 4.23671 18.4176 2.45238 19.8733C2.04491 20.2061 1.86249 20.5315 1.88999 21.0674C1.94041 22.0501 2.44459 22.596 3.42315 22.5965C6.28092 22.5969 9.13823 22.5965 11.996 22.5965ZM1.90373 17.9396C2.01786 17.848 2.08386 17.7971 2.14757 17.743C3.60831 16.5109 5.06951 15.2788 6.52933 14.0454C7.68573 13.0682 9.01997 13.1204 10.0943 14.1907C11.0018 15.0946 11.9057 16.0021 12.8118 16.9069C13.1661 17.2608 13.4045 17.2796 13.8161 16.9821C14.769 16.2941 15.7168 15.5997 16.6725 14.9163C17.5855 14.264 18.7084 14.2796 19.6077 14.9488C19.8451 15.1257 20.0725 15.316 20.3044 15.5002C20.8846 15.9618 21.4654 16.4234 22.0951 16.9244V16.5623C22.0951 12.3568 22.0956 8.15129 22.0951 3.94581C22.0951 2.9397 21.5612 2.40434 20.5588 2.40434C14.8528 2.40388 9.14693 2.40388 3.44102 2.40434C2.43954 2.40434 1.90419 2.94062 1.90419 3.94489C1.90373 8.49415 1.90373 13.0439 1.90373 17.5936C1.90373 17.6889 1.90373 17.7838 1.90373 17.9396ZM21.1198 24.4321H2.8791C2.84426 24.417 2.81081 24.3954 2.7746 24.3885C1.10393 24.0668 0.069912 22.8228 0.0694536 21.1209C0.0676203 15.3757 0.0671619 9.63063 0.0722037 3.8855C0.072662 3.60132 0.0951209 3.30934 0.160664 3.03387C0.518172 1.53456 1.77678 0.570165 3.36769 0.569706C9.10294 0.567414 14.8382 0.568331 20.5739 0.569248C22.5718 0.569706 23.9299 1.93517 23.9303 3.9428C23.9313 7.10688 23.9308 10.271 23.9308 13.435C23.9308 16.0161 23.934 18.5971 23.929 21.1782C23.9262 22.6394 23.0457 23.8555 21.6978 24.2795C21.508 24.339 21.3128 24.3817 21.1198 24.4321Z"
                          fill="#404040"
                        />
                      </g>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.2028 8.82971C17.2023 7.99045 16.5029 7.29282 15.6659 7.29603C14.8285 7.29923 14.1319 8.00466 14.141 8.84025C14.1497 9.67218 14.8304 10.351 15.6614 10.3579C16.4978 10.3648 17.2032 9.6653 17.2028 8.82971ZM19.0389 8.83834C19.0407 10.6704 17.5048 12.2041 15.6746 12.1977C13.8142 12.1908 12.2944 10.6677 12.3026 8.81818C12.3113 6.97235 13.8147 5.47121 15.6664 5.45975C17.5108 5.44829 19.0371 6.97739 19.0389 8.83834Z"
                        fill="#404040"
                      />
                    </svg>

                    <Text
                      fontSize="15px"
                      lineHeight="18px"
                      fontFamily="Montserrat"
                      fontWeight="600"
                      color="rgba(64, 64, 64, 1)"
                    >
                      Photo
                    </Text>
                  </Box>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                    multiple
                  />
                </Box>
                <Box
                  w="100px"
                  h="80px"
                  bg="#F4F4F5"
                  borderRadius="10px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  gap="5px"
                  overflow="hidden"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="5px"
                    style={{ cursor: "pointer" }}
                  >
                    <svg
                      width="26"
                      height="25"
                      viewBox="0 0 26 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_128_261"
                        maskUnits="userSpaceOnUse"
                        x="1"
                        y="0"
                        width="24"
                        height="25"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.06821 0.568237H24.9318V24.4319H1.06821V0.568237Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_128_261)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.0636 6.44591C16.0274 5.04094 15.0296 3.68412 14.0222 2.33417C13.9704 2.26493 13.8416 2.22045 13.748 2.21999C12.218 2.21312 10.6883 2.21495 9.15823 2.21541C9.10137 2.21587 9.04406 2.22641 8.96794 2.23421C9.00004 2.28923 9.01655 2.32408 9.03901 2.35389C10.0115 3.6722 10.9864 4.98821 11.9538 6.30972C12.0419 6.43032 12.1382 6.44775 12.2688 6.44775C13.7833 6.44499 15.2978 6.44591 16.8119 6.44591H17.0636ZM2.6898 6.43237H9.96977C9.9583 6.39661 9.95601 6.37276 9.94409 6.35671C8.95001 5.00768 7.9564 3.65911 6.95682 2.31467C6.91555 2.25919 6.81697 2.22067 6.74406 2.21929C6.31718 2.21104 5.88983 2.20462 5.46387 2.21884C4.12223 2.26331 3.01352 3.16343 2.78793 4.47302C2.6788 5.10719 2.71823 5.76703 2.6898 6.43237ZM23.3169 6.4329C23.2862 5.76618 23.3256 5.099 23.2119 4.45888C22.9725 3.11398 21.8276 2.22303 20.4328 2.21661C19.0288 2.21019 17.6243 2.21524 16.2199 2.2157C16.1617 2.2157 16.1034 2.22441 16.0213 2.23083C16.0571 2.29181 16.0759 2.33216 16.102 2.36747C17.0727 3.68486 18.0425 5.00317 19.0205 6.31505C19.0733 6.38567 19.1966 6.44024 19.2874 6.44069C20.5442 6.44895 21.801 6.4462 23.0578 6.44574C23.1262 6.44574 23.194 6.43932 23.3169 6.4329ZM2.71601 8.10645C2.71601 8.21512 2.71601 8.29903 2.71601 8.38295C2.71601 12.2122 2.7151 16.041 2.71647 19.8703C2.71739 21.5779 3.92835 22.7885 5.63909 22.7894C10.5476 22.7912 15.4561 22.7912 20.3645 22.7894C22.0771 22.7885 23.2876 21.5802 23.2885 19.8717C23.2904 16.0346 23.289 12.198 23.2885 8.36094C23.2885 8.27932 23.2808 8.19724 23.2762 8.10645H2.71601ZM20.9244 24.4321H5.08057C5.02875 24.4178 4.97786 24.3972 4.92513 24.3903C2.75998 24.1097 1.08317 22.2503 1.07766 20.0677C1.06528 15.0269 1.06483 9.98663 1.07766 4.94634C1.08408 2.55596 3.05756 0.58332 5.44876 0.577359C10.481 0.564061 15.5138 0.566812 20.5461 0.575983C22.5049 0.579651 24.217 1.90117 24.7549 3.78944C24.8287 4.04897 24.8736 4.3163 24.9318 4.57997V20.4244C24.9172 20.4836 24.8979 20.5422 24.8878 20.6019C24.5875 22.3709 23.5948 23.5714 21.9148 24.1913C21.5979 24.3082 21.2554 24.3536 20.9244 24.4321Z"
                          fill="#404040"
                        />
                      </g>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.3034 13.1093V17.7699C12.6546 16.9894 13.9779 16.225 15.3379 15.4391C13.9734 14.6513 12.6537 13.8888 11.3034 13.1093ZM9.64674 15.4412C9.64674 14.2228 9.64582 13.0045 9.64674 11.7857C9.64766 11.0016 10.2919 10.6256 10.9691 11.0158C13.0714 12.2273 15.1733 13.4401 17.2738 14.6548C17.9951 15.0716 17.996 15.8075 17.2779 16.2225C15.1839 17.4331 13.0889 18.6422 10.993 19.85C10.2855 20.2577 9.6472 19.8881 9.64674 19.0737C9.64582 17.8632 9.64674 16.6522 9.64674 15.4412Z"
                        fill="#404040"
                      />
                    </svg>

                    <Text
                      fontSize="15px"
                      lineHeight="18px"
                      fontFamily="Montserrat"
                      fontWeight="600"
                      color="rgba(64, 64, 64, 1)"
                    >
                      Video
                    </Text>
                  </Box>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                    multiple
                  />
                </Box>
                <Box
                  w="100px"
                  h="80px"
                  bg="#F4F4F5"
                  borderRadius="10px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  gap="5px"
                  overflow="hidden"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="5px"
                    style={{ cursor: "pointer" }}
                  >
                    <svg
                      style={{ margin: "0 auto" }}
                      width="26"
                      height="25"
                      viewBox="0 0 26 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 25C9.66113 25 6.52212 23.6998 4.16113 21.3389C1.80024 18.9779 0.5 15.8389 0.5 12.5C0.5 9.16113 1.80024 6.02212 4.16113 3.66113C6.52212 1.30024 9.66113 0 13 0C16.3389 0 19.4779 1.30024 21.8389 3.66113C24.1998 6.02212 25.5 9.16113 25.5 12.5C25.5 15.8389 24.1998 18.9779 21.8389 21.3389C19.4779 23.6998 16.3389 25 13 25ZM13 1.95312C7.18442 1.95312 2.45312 6.68442 2.45312 12.5C2.45312 18.3156 7.18442 23.0469 13 23.0469C18.8156 23.0469 23.5469 18.3156 23.5469 12.5C23.5469 6.68442 18.8156 1.95312 13 1.95312ZM17.577 14.6576C17.122 14.368 16.5184 14.5021 16.2289 14.9572C16.2168 14.9761 15.0015 16.8487 12.9512 16.8487C10.9009 16.8487 9.68555 14.9761 9.67349 14.9572C9.38394 14.5022 8.78037 14.3681 8.32534 14.6576C7.87031 14.9472 7.73618 15.5508 8.02573 16.0058C8.09839 16.1199 9.84077 18.8018 12.9512 18.8018C16.0616 18.8018 17.804 16.12 17.8766 16.0058C18.1662 15.5507 18.032 14.9472 17.577 14.6576ZM8.70312 8.05664C9.37729 8.05664 9.92383 8.60317 9.92383 9.27734C9.92383 9.95151 9.37729 10.498 8.70312 10.498C8.02895 10.498 7.48242 9.95151 7.48242 9.27734C7.48242 8.60317 8.02895 8.05664 8.70312 8.05664ZM16.0273 9.27734C16.0273 9.95151 16.5739 10.498 17.248 10.498C17.9222 10.498 18.4688 9.95151 18.4688 9.27734C18.4688 8.60317 17.9222 8.05664 17.248 8.05664C16.5739 8.05664 16.0273 8.60317 16.0273 9.27734Z"
                        fill="black"
                      />
                    </svg>
                    <Text
                      fontSize="15px"
                      lineHeight="18px"
                      fontFamily="Montserrat"
                      fontWeight="600"
                      color="rgba(64, 64, 64, 1)"
                    >
                      GIF
                    </Text>
                  </Box>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                    multiple
                  />
                </Box>
                <Box
                  w="100px"
                  h="80px"
                  bg="#F4F4F5"
                  borderRadius="10px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  gap="5px"
                  overflow="hidden"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="5px"
                    style={{ cursor: "pointer" }}
                  >
                    <svg
                      width="26"
                      height="25"
                      viewBox="0 0 26 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_128_110"
                        maskUnits="userSpaceOnUse"
                        x="1"
                        y="0"
                        width="24"
                        height="25"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.06824 0H24.9319V25H1.06824V0Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_128_110)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.67747 22.0215H11.5812V19.0444H2.67747V22.0215ZM2.68068 5.95359H16.3898V2.97656H2.68068V5.95359ZM2.68251 14.001H23.3258V11.0105H2.68251V14.001ZM2.03862 0C2.73912 0.234153 2.67154 0.823805 2.66377 1.39997H3.00992C7.68054 1.39997 12.3512 1.40042 17.0218 1.39908C17.2743 1.39863 17.5172 1.41121 17.7177 1.59098C17.9068 1.76132 17.9912 1.9739 17.9912 2.22153C17.9917 3.71858 17.9967 5.21609 17.9885 6.71314C17.9853 7.24077 17.6552 7.52795 17.0907 7.52795C12.3955 7.52885 7.70017 7.5284 3.00444 7.5284C2.89941 7.5284 2.79438 7.5284 2.67565 7.5284V9.4277H3.00398C9.9889 9.4277 16.9743 9.42815 23.9592 9.4259C24.2323 9.4259 24.5136 9.43803 24.6816 9.66455C24.8054 9.83083 24.9154 10.0542 24.9177 10.2537C24.9374 11.7508 24.9332 13.2479 24.9259 14.7454C24.9232 15.2896 24.5889 15.5719 23.9852 15.5719C16.9916 15.5723 9.99849 15.5723 3.00489 15.5723H2.67519V17.4716H3.00352C6.07861 17.4716 9.15369 17.4716 12.2288 17.4716C12.9019 17.472 13.1887 17.7565 13.1887 18.4257C13.1891 19.8414 13.1896 21.2571 13.1887 22.6733C13.1882 23.3083 12.8932 23.5996 12.2493 23.5996C9.17424 23.6005 6.09916 23.6 3.02407 23.6C2.91813 23.6 2.81173 23.6 2.64871 23.6C2.64871 23.8513 2.6656 24.0841 2.6446 24.3137C2.61446 24.6467 2.37426 24.9038 2.04364 24.9775C1.71212 25.0508 1.43539 24.9443 1.2372 24.6787C1.16231 24.5784 1.12075 24.4476 1.09016 24.3245C1.06459 24.2238 1.07417 24.1142 1.07417 24.0086C1.07372 16.3359 1.076 8.66277 1.06824 0.989645C1.06778 0.509204 1.22076 0.170334 1.69111 0H2.03862Z"
                          fill="#404040"
                        />
                      </g>
                    </svg>

                    <Text
                      fontSize="15px"
                      lineHeight="18px"
                      fontFamily="Montserrat"
                      fontWeight="600"
                      color="rgba(64, 64, 64, 1)"
                    >
                      Poll
                    </Text>
                  </Box>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                    multiple
                  />
                </Box>
              </HStack>
              <Box>
                <Button
                  bg="rgba(238, 46, 18, 1)"
                  w="172px"
                  h="50px"
                  disabled={postText.length < 3 || images.length === 0}
                  onClick={onPressPost}
                  borderRadius="50px"
                  leftIcon={
                    <IoSendSharp
                      width="20px"
                      height="20px"
                      color="white"
                      rotate={90}
                    />
                  }
                >
                  <Text color="white" ms="5px">
                    Post
                  </Text>
                </Button>
              </Box>
            </HStack>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
