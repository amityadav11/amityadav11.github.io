import React from "react"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
// import { CVDuncan, myWords } from "../constants"
import { CV_Duncan,me } from "../assets"
// import { CVDuncan,myWords } from "../constants/index"
import CVDoc from "../assets/Amit-Yadav-Resume.pdf"

const Card = ({ index, text, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{text}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          {/* <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p> */}
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
)

const CV = () => {
  const Words = [
  {
    text: "Here you can download my СV by clicking on Download button. I will be glad to our cooperation.",
    name: "Amit Yadav",
    designation: "Full stack developer",
    // company: "AMIT",
    image: me,
  }
];

console.log(Words)
  return (
    <div className="bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>For employers</p>
          <h2 className={styles.sectionHeadText}>My CV.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
      >
        {Words.map((myWords, index) => (
          <Card key={myWords.name} index={index} {...myWords} />
        ))}

        <motion.div
          variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
          className="bg-black-200 p-10 rounded-3xl xs:w-[640px] w-full"
        >
          <div className="flex min-[850px]:flex-row flex-col justify-around items-center">
            <img src={CV_Duncan} alt="CVDuncan" className="w-[250px]" />

            <a href={CVDoc} download>
              <button className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[21px]" onClick={() => window.open(CVDoc, "_blank")}>
                Download CV
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(CV, "cv")
