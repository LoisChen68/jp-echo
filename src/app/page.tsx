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
import styled from "styled-components";
import fontNormal from "../../public/image/font-normal.svg";
import speed1x from "../../public/image/1.0x.svg";
import ExerciseCard from "@/components/ExerciseCard";

const StyledWrapper = styled(Box)`
  flex-grow: 1;
`;

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
    <>
      <StyledWrapper>
        <Flex alignItems={"center"} padding={"30px"} gap="20px">
          <CircularProgress
            value={((stepIndex + 1) / steps.length) * 100}
            color="var(--green)"
            display="flex"
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
        <AspectRatio overflow={"hidden"} ratio={2}>
          <iframe
            src="https://www.youtube.com/embed/vd6mwUSiS40"
            allowFullScreen
          />
        </AspectRatio>
      </StyledWrapper>
      {stepIndex !== steps.length - 1 && (
        <Flex
          position="fixed"
          bottom="0px"
          width="100%"
          paddingBottom="10px"
          justifyContent="space-around"
          alignItems="center"
          backgroundColor="var(--footer-background-color)"
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
    </>
  );
}
