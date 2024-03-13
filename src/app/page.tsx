"use client";
import {
  AspectRatio,
  Box,
  Center,
  CircularProgressLabel,
  Flex,
  Text,
  CircularProgress,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import fontNormal from "../../public/image/font-normal.svg";
import speed1x from "../../public/image/1.0x.svg";
import ExerciseCard from "@/components/ExerciseCard";
import FinalSection from "@/components/FinalSection";

const steps = [
  "第一次播放：無字幕",
  "第二部分：練習重點關鍵字",
  "第三次播放：日文關鍵字",
  "第四次播放：日文字幕",
  "第五次播放：無字幕",
  [
    "試題測驗：第一部分 1 / 3",
    "試題測驗：第一部分 2 / 3",
    "試題測驗：第一部分 3 / 3",
  ],
  [
    "試題測驗：第二部分 1 / 3",
    "試題測驗：第二部分 2 / 3",
    "試題測驗：第二部分 3 / 3",
  ],
  "完成測驗！",
];

const exercise = {
  すみますん: "不好意思",
  何名様ですか: "請問幾位",
  大丈夫: "沒問題",
  お願いします: "拜託",
  注文: "點餐",
  お会計: "結帳",
};

const finalText = `
感謝您體驗 JP Echo
測試版！希望您喜歡我們的服務。我們誠摯地邀請您參與試用體驗心得調查，填寫內容將用以持續改善網站功能。待正式版本上線後，會第一時間邀請您來使用。謹代表
JP Echo 開發團隊 感謝您提供的建議和心得。
`;

export default function Home() {
  const [stepIndex, setStepIndex] = useState(0);

  const currentStep = steps[stepIndex];

  const handleNextStep = () => {
    if (stepIndex === steps.length - 1) {
      return;
    }
    setStepIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousStep = () => {
    if (stepIndex === 0) {
      return;
    }
    setStepIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <Box width={{ base: "100%", lg: "90%" }}>
      <Flex alignItems={"center"} gap="20px">
        <CircularProgress
          value={((stepIndex + 1) / steps.length) * 100}
          color="var(--green)"
          display="flex"
          padding="30px"
          size="70px"
        >
          <CircularProgressLabel>
            {stepIndex === steps.length - 1
              ? "🎉"
              : `${stepIndex + 1}/${steps.length}`}
          </CircularProgressLabel>
        </CircularProgress>
        <Center>
          <Flex flexDirection="column">
            <Text fontSize="16px" margin="0px 0px 10px 0px" as="b">
              {Array.isArray(currentStep) ? currentStep[0] : currentStep}
            </Text>
            {stepIndex < steps.length - 1 && (
              <Text
                fontSize="12px"
                margin="0px"
                display="flex"
                alignItems="center"
                color="var(--gray-dark)"
              >
                <IoIosArrowForward onClick={handleNextStep} />
                {Array.isArray(steps[stepIndex + 1])
                  ? steps[stepIndex + 1][0]
                  : steps[stepIndex + 1]}
              </Text>
            )}
          </Flex>
        </Center>
      </Flex>
      {stepIndex === 1 ? (
        <ExerciseCard exercise={exercise} />
      ) : stepIndex === steps.length - 1 ? (
        <FinalSection text={finalText} />
      ) : (
        <Flex
          justifyContent="center"
          backgroundColor="var(--footer-background-color)"
          borderRadius="10px"
        >
          <Box
            width={{ base: "100%", sm: "80%", lg: "60%" }}
            paddingY={{ base: "0px", sm: "10px" }}
          >
            <AspectRatio overflow={"hidden"} ratio={2}>
              <iframe
                src="https://www.youtube.com/embed/vd6mwUSiS40"
                allowFullScreen
              />
            </AspectRatio>
          </Box>
        </Flex>
      )}
      {stepIndex !== steps.length - 1 && (
        <Flex
          position="fixed"
          bottom="0px"
          marginBottom={{ base: "0", lg: "10px" }}
          paddingBottom={{ base: "10px", lg: "0px" }}
          width={{ base: "100%", lg: "90%" }}
          justifyContent="space-around"
          alignItems="center"
          backgroundColor="var(--footer-background-color)"
          backdropFilter="blur(5px)"
          zIndex="999"
          borderRadius={{ base: "0px", lg: "50px" }}
        >
          <IoIosArrowBack
            size="2rem"
            color={stepIndex === 0 ? "var(--gray-dark)" : "var(--black)"}
            onClick={handlePreviousStep}
          />
          <Image src={speed1x} alt="speed1.0x" />
          <Image src={fontNormal} alt="font-normal" />
          <IoIosArrowForward
            size="2rem"
            color={
              stepIndex === steps.length - 1
                ? "var(--gray-dark)"
                : "var(--black)"
            }
            onClick={handleNextStep}
          />
        </Flex>
      )}
    </Box>
  );
}
