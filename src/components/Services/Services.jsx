import React from "react";
import bg from "../../assets/xabvokgynbkytiuukhqq.png";
import NavBar from "../NavBar/NavBar";
import { services } from "../../data/services.json";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import a from "../../assets/services/uvhli36lpkyxpgrkwblj.jpg";
import b from "../../assets/services/xmefpgnqfunlxtteeyr8.jpg";
import c from "../../assets/services/isypihvnh2g1vduju3yg.jpg";
import d from "../../assets/services/lskghad8bhskjden1y8n.jpg";
import e from "../../assets/services/ll0dxb4psbehtz4w8tcq.jpg";
import f from "../../assets/services/xlykzj1qg2f1gyzqbaki.jpg";
import g from "../../assets/services/jymnwqzhwmi9gt5ppz8d.jpg";
import h from "../../assets/services/zpfridasq1xhzgjbkhgz.jpg";
import i from "../../assets/services/vg0ayodhdpmqj07ypkoa.jpg";
import j from "../../assets/services/blxahxpngxgsm9tzdm4v.jpg";
import k from "../../assets/services/b8zxzgkmmy0hxjrca1sr.jpg";
import l from "../../assets/services/nqbgzuk5vyyok4fud9ek.jpg";
import m from "../../assets/services/c9v2pvqasz3zdicwoz9z.jpg";
import n from "../../assets/services/tfvkj51g6c5uuzu9ybg4.jpg";
import Footer from "../Footer/Footer";

const Services = () => {
  const images = [a, b, c, d, e, f, g, h, i, j, k, l, m, n];
  return (
    <div className="max-w-[100vw] h-auto overflow-hidden box-border">
      <NavBar />
      <div className="relative w-full h-[55vh] flex justify-center items-center ">
        <div className="absolute w-[2000px] h-[55vh] v">
          <img src={bg} alt="bg" className="w-[2000px] h-full" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, delay: 0.3 },
          }}
          className="z-10"
        >
          <h1 className="z-10 text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-bold text-white">
            Your to-do list is on us.
          </h1>
        </motion.div>
      </div>
      <div className="w-[95%] md:w-[95%] lg:w-[80%] xl:w-[80%] mx-auto flex flex-col justify-center items-center my-10 gap-4">
        <h1 className="z-10 text-xl md:text-xl lg:text-2xl xl:text-2xl font-bold " v>
          Hire a trusted Tasker presto.
        </h1>
        <div className="flex justify-center items-stretch flex-wrap gap-x-4 gap-y-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              items={service.tasks}
              heading={service.heading}
              description={service.description}
              image={images[index]}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
