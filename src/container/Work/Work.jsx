import React, { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';
import { images } from '../../constants';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const projects = [
    {
      name: 'first',
      title: 'Fast delivery Website',
      description: 'A Modern UI/UX website',
      projectLink: 'https://faster-delivery.netlify.app/',
      codeLink: 'https://github.com/tdark23/Fast-Delivery',
      imgUrl: images.about04,
      tags: ['Websites', 'ALL'],
    },
    {
      name: 'second',
      title: 'Hintekk Transport App',
      description: 'A Modern React App',
      projectLink: 'https://transport-app.netlify.app/',
      codeLink: 'https://github.com/tdark23/HintekkcodingChallenge-TedMbang-',
      imgUrl: images.about01,
      tags: ['Web App', 'ALL'],
    },
    {
      name: 'third',
      title: 'Promote Brand',
      description: 'Cool Brand Promotion Website',
      projectLink: 'https://brand-promotion.netlify.app/',
      codeLink: 'https://github.com/tdark23/Promote',
      imgUrl: images.about03,
      tags: ['UI/UX', 'ALL'],
    },
    {
      name: 'first',
      title: 'Modern UI/UX Website',
      description: 'A Modern UI/UX website',
      projectLink: '',
      codeLink: 'https://github.com',
      imgUrl: images.about04,
      tags: ['UI/UX', 'ALL'],
    },
    {
      name: 'second',
      title: 'Christmas Website',
      description: 'A Modern Christmas Shop website',
      projectLink: 'https://x-mas-shop.netlify.app/',
      codeLink: 'https://github.com/tdark23/Christmas-site',
      imgUrl: images.about01,
      tags: ['Websites', 'ALL'],
    },
    {
      name: 'third',
      title: 'Corona tracker',
      description: 'Cool Covid-19 tracker App',
      projectLink: 'https://covidd-track-app.netlify.app/',
      codeLink: 'https://github.com/tdark23/corona-tracker',
      imgUrl: images.about03,
      tags: ['Web App', 'ALL'],
    },
    {
      name: 'third',
      title: 'Food order app',
      description: 'Cool React app',
      projectLink: 'https://camerfood-order-app.netlify.app',
      codeLink: 'https://github.com/tdark23/Food-order-app',
      imgUrl: images.about03,
      tags: ['Web App', 'ALL'],
    },
  ]

  const [filterWork, setFilterWork] = useState(projects);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(projects);
      } else {
        setFilterWork(projects.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div id="home" className="app__work-filter">
        {['UI/UX', 'Web App', 'Websites', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);

