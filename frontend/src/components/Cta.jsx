import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import texture from "../../public/texture.png";

/* Animation Variants */
const container = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FinalCTA() {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-10">

      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative w-full rounded-3xl overflow-hidden bg-[#003227]"
        style={{
          backgroundImage: `url(${texture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Subtle animated overlay */}
        <motion.div
          className="absolute inset-0 bg-[#003227]/80"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 0.75 }}
          transition={{ duration: 1.5 }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-16 py-12 sm:py-16 md:py-20">

          {/* Heading */}
          <motion.h2
            variants={item}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mb-4"
          >
            Ready to Optimize Your Packaging Production?
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={item}
            className="text-sm sm:text-base text-[#7CBAA6] max-w-lg mb-8"
          >
            Join hundreds of leading manufacturers globally. Let’s engineer your
            success with machinery that delivers precision and speed.
          </motion.p>

          {/* Button */}
          <motion.div variants={item}>
            <Link
              to="/contact"
              className="bg-white text-[#003227] px-8 py-3 sm:px-10 sm:py-4 rounded-full text-[14px] font-bold inline-block"
            >
              <motion.span
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block"
              >
                Contact us
              </motion.span>
            </Link>
          </motion.div>

        </div>

        {/* Background subtle zoom effect */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
        />
      </motion.section>

    </div>
  );
}