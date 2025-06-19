import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <motion.div
        className="shapes-wrapper"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 5, duration: 1 }}
      >
        <motion.div
          className="diamond"
          initial={{ x: -100, rotate: -180, scale: 0.2, opacity: 0 }}
          animate={{ x: 0, rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <svg width="80" height="80" viewBox="0 0 100 100">
            <polygon points="50 0, 100 50, 50 100, 0 50" fill="white" />
          </svg>
        </motion.div>

        <svg width="140" height="120" viewBox="0 0 100 100" className="triangle">
          <defs>
            <clipPath id="clipTriangleFill">
              <motion.polygon
                initial={{ points: '10,80 10,80 10,80' }}
                animate={{ points: '10,10 90,10 50,80' }}
                transition={{ duration: 1.2, delay: 1.4 }}
                fill="white"
              />
            </clipPath>
          </defs>

          <motion.line
            x1="50" y1="80" x2="50" y2="80"
            animate={{ x2: 10, y2: 10 }}
            transition={{ duration: 0.8 }}
            stroke="white" strokeWidth="4"
          />
          <motion.line
            x1="50" y1="80" x2="50" y2="80"
            animate={{ x2: 90, y2: 10 }}
            transition={{ duration: 0.8 }}
            stroke="white" strokeWidth="4"
          />
          <motion.line
            x1="10" y1="10" x2="10" y2="10"
            animate={{ x2: 90 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            stroke="white" strokeWidth="4"
          />

          <polygon
            points="10,10 90,10 50,80"
            fill="white"
            clipPath="url(#clipTriangleFill)"
          />
        </svg>
      </motion.div>

      <motion.div
        className="elevate-text"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 5.5, duration: 1 }}
        >
          ELEVATE
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;
