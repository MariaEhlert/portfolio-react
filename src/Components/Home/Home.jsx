import styles from "./Home.module.scss"
import timelineElements from "../../Assets/data/timelineElements"
import { ReactComponent as WorkIcon } from "../../Assets/images/work.svg"
import { ReactComponent as SchoolIcon } from "../../Assets/images/school.svg"
import { BsCodeSlash } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';

import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import { Slider } from "../Slider/Slider"



export const Home = () => {
    return (
        <main>
            {/* Kompetencer */}
            <section className={styles.sectionSkills}>
                <article>
                    <h4>Kompetencer</h4>
                    <h3>Webudvikling</h3>
                    <div className={styles.skillsWrapper}>
                        <figure>
                            <figcaption>
                                <BsPencil />
                            </figcaption>
                            <h6>Design af hjemmesider</h6>
                            <p>Webdesigns med fokus på brugervenlige, responsive og konverteringsoptimeret hjemmesider.</p>
                        </figure>
                        <figure>
                            <figcaption>
                                <BsCodeSlash />
                            </figcaption>
                            <h6>Kodning</h6>
                            <p>Brænder for at kode og opbygge hjemmesider fra bunden med sprog som: <br></br>HTML, CSS/SASS, JavaScript og React.</p>
                        </figure>
                        <figure className={styles.skills}>
                            <figcaption>
                                <AiOutlineCheck />
                            </figcaption>
                            <h6>IT kvalifikationer</h6>
                            <ul>
                                <li>React</li>
                                <li>Vanilla JavaScript</li>
                                <li>NodeJS</li>
                                <li>MySQL</li>
                                <li>CMS/Headless CMS</li>
                                <li>PHP</li>
                                <li>PWA</li>
                                <li>VScode</li>
                                <li>Typescript</li>
                                <li>Adobe</li>
                                <li>Python</li>
                                <li>HTML</li>
                            </ul>
                        </figure>
                    </div>
                </article>
            </section>
            {/* om mig */}
            <section className={styles.sectionAbout}>
                <article>
                    <h4>Om mig</h4>
                    <h3>Passioneret webudvikler</h3>
                    <figure>
                        <div className={styles.aboutText}>
                            <p>Som person går jeg op i, at det jeg laver er perfekt ned til mindste detalje. Jeg er meget pligtopfyldende på en 
                                arbejdsplads og giver mig selv 100% til mit arbejde.</p>
                            <p>På en arbejdsplads deltager jeg aktivt i opgaverne. Jeg er lydhør overfor kundens ønsker og mine kollegaers forslag, 
                                men jeg siger også min mening i forhold til min erfaring, kompetencer og personlige holdninger.  </p>
                            <p>Jeg er positiv, imødekommende og serviceorienteret. Tidligere kollegaer beskriver mig som fokuseret, 
                                målrettet og pligtopfyldende.</p>
                            <p>Jeg lægger stor vægt på at være ansvarsbevidst og professionel som medarbejder. Jeg er en teamplayer, der elsker at 
                                følge best practice, deltage i vidensdeling og være åben for sparring.</p>
                        </div>
                        <figcaption>
                            <Slider/>
                        </figcaption>
                    </figure>
                </article>
            </section>
            {/* portfolio */}
            {/* <section className={styles.sectionPortfolio}>
                <article>
                    <h4>Portfolio</h4>
                    <h3>Mit Portfolio</h3>
                    <figure>
                        <img src={require('')} alt="" />
                        <figcaption>
                            <a href=""</a>
                        </figcaption>
                    </figure>
                </article>
            </section> */}
            {/* cv */}
            <section className={styles.sectionCv}>
                <article >
                    <h4>Mit CV</h4>
                    <h3>Tidslinje</h3>
                    <VerticalTimeline>
                        {timelineElements.map(element => {
                            const workIconStyles = { background: "#FFCCCC" }
                            const schoolIconStyles = { background: "#F8E3E3" }
                            const isWorkIcon = element.icon === 'work';
                            // linjeskift med \n i title
                            function createMarkup(text) {
                                return { __html: text.replace(/\n/g, '<br>') };
                            }
                            return (
                                <VerticalTimelineElement
                                    key={element.key}
                                    date={element.date}
                                    icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                                    iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                >
                                    <h5 className="vertical-timeline-element-title"dangerouslySetInnerHTML={createMarkup(element.title)}></h5>
                                    <h6 className="vertical-timeline-element-subtitle">{element.location}</h6>
                                    <p id="description">{element.description}</p>
                                </VerticalTimelineElement>
                            )
                        })}
                    </VerticalTimeline>
                </article>
            </section>
        </main>
    )
}