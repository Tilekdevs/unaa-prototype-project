import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaIdCard } from "react-icons/fa6";
import { IoMdInformationCircle } from "react-icons/io";
import { MdPersonSearch } from "react-icons/md";
import { PiCarDuotone } from "react-icons/pi";
import "./homeFeatures.scss";

const HomeFeatures = () => {
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
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const items = features.map((feature, index) => (
    <motion.div
      key={index}
      className="feature"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      ref={ref}
    >
      <div className="icon">{feature.icon}</div>
      <h3 className="title">{feature.title}</h3>
      <p className="description">{feature.description}</p>
    </motion.div>
  ));

  return (
    <>
      <div className="wrapper">
        <div className="wrapper__container">
          <div className="wrapper__left">
            <div className="head">Наши услуги</div>
            <p className="text">
              Наше агенство предостовляет вам возможность получить выписку по
              ТС, проверить штрафы, узнать владельца ТС и др.
            </p>
          </div>
          <div className="wrapper__right">{items}</div>
        </div>
      </div>
    </>
  );
};

export default HomeFeatures;
