import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaIdCard } from "react-icons/fa6";
import { IoMdInformationCircle } from "react-icons/io";
import { MdPersonSearch } from "react-icons/md";
import { PiCarDuotone } from "react-icons/pi";
import "./homeFeatures.scss";

const features = [
  {
    icon: <FaIdCard />,
    title: "Онлайн сервис Carcheck",
    description:
      "All packages are published under MIT license, you can use Mantine in any project",
  },
  {
    icon: <IoMdInformationCircle />,
    title: "Проверка штрафов",
    description:
      "Build type safe applications, all components and hooks export types",
  },
  {
    icon: <MdPersonSearch />,
    title: "Поиск владельца ТС",
    description:
      "With new :focus-visible selector focus ring will appear only when user navigates with keyboard",
  },
  {
    icon: <PiCarDuotone />,
    title: "Получение выписки по ТС",
    description:
      "Customize colors, spacing, shadows, fonts and many other settings with global theme object",
  },
  {
    icon: <PiCarDuotone />,
    title: "Получение выписки по ТС",
    description:
      "Customize colors, spacing, shadows, fonts and many other settings with global theme object",
  },
  {
    icon: <PiCarDuotone />,
    title: "Получение выписки по ТС",
    description:
      "Customize colors, spacing, shadows, fonts and many other settings with global theme object",
  },
];

const HomeFeatures = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-160px",
  });

  return (
    <motion.div
      className="wrapper"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      ref={ref}
    >
      <div className="wrapper__container">
        <div className="wrapper__left">
          <h1 className="head">Наши услуги</h1>
          <p className="text">
            Наше агентство предоставляет вам возможность получить выписку по ТС,
            проверить штрафы, узнать владельца ТС и многое другое.
          </p>
        </div>
        <div className="wrapper__right">
          {features.map((feature, index) => (
            <div className="feature" key={index}>
              <div className="feature__icon">{feature.icon}</div>
              <h3 className="feature__title">{feature.title}</h3>
              <p className="feature__description">{feature.description}</p>
              <div className="feature__dimmer"></div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HomeFeatures;
