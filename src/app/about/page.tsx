
import { Metadata } from "next"
import styles from './page.module.css';
import { Cookies } from "@/components/Cookies/Cookies";



export const metadata: Metadata = {
  title: 'About | CLOUD FLEX',
  description: 'Streaming',
}

export default function About() {
  return (
    <main>
      <Cookies />
      <div className={styles.container}>
      <h1 className={styles.title}>Streaming team</h1>
      <section className={styles.sectionText}>
        <h2 className={styles.subtitle}>The Team</h2>
        <p className={styles.text}>CloudFlex streaming team is a proficient and skilled unit that consists of six members with more than two years
        of experience in video streaming field. During this time, the team has gained the experience with various
        streaming platforms including Wowza, Elemental / AWS Media Services and Janus WebRTC.
        Our developments cover video streaming both from browser and native client systems,
        such as handheld devices and PCs.</p>

        <p className={styles.text}>From the web standpoint, the team includes a certified Google Cloud Platform professional data engineer
        and seasoned Amazon Web Services specialists. On the mobile side, we have a proficient engineer with
        extensive experience in development of scalable and robust handheld systems.</p>
      </section>
      <section className={styles.sectionText}>
        <h2 className={styles.subtitle}>Case №1</h2>
        <p className={styles.text}>Streaming platform based on Wowza services</p>
        <h3 className={styles.subsubtitle}>Technologies</h3>
        <p className={styles.text}>- On-premise streaming infrastructure, Wowza media services for advanced video processing 
        <br></br> - Python, MongoDB, JavaScript, React, Wowza</p>
      </section>
      <section className={styles.sectionText}>
        <h2 className={styles.subtitle}>Case №2</h2>
        <p className={styles.text}>Streaming platform based on AWS Media Services</p>
        <h3 className={styles.subsubtitle}>Description</h3>
        <a href="" className={styles.sectionText__link}>Serverless Live Streaming case </a>
        <p className={styles.text}>- On-premise streaming infrastructure, Wowza media services for advanced video processing 
                            <br />- Python, MongoDB, JavaScript, React, Wowza</p>
      </section>
      <section className={styles.sectionText}>
        <h2 className={styles.subtitle}>Case №3</h2>
        <p className={styles.text}>Mobile-based streaming application</p>
        <h3 className={styles.subsubtitle}>Description</h3>
        <a href="" className={styles.sectionText__link}>Live Streaming from mobile case</a>
        <p className={styles.text}>
          Streaming Android application is a service that supports video streaming right from client&apos;s device.
          The main challenge was to develop a platform which remains reliable even despite an unstable
          internet connection. As experience had shown the Android platform has a problem with default OMX codecs
          and theirs buffers due to hardware limitations on certain devices. Also challenging was to develop a solution
          which can: manage video rooms and related streams; play the streaming video inside of the application
          remain stable after screen rotation, internet connection errors and etc.
        </p>
        <p className={styles.text}>
          <br /> - manage video rooms and related streams; 
          <br /> - play the streaming video inside of the application 
          <br /> - remain stable after screen rotation, internet connection errors and etc.
        </p>
        <h3 className={styles.subsubtitle}>Technologies</h3>
        <p className={styles.text}>
          - New Android architecture component for fresh UI features and intuitive UX 
          <br /> - Model-View-ViewModel as an architectural approach, and newest android approaches 
          <br /> - Reactive frameworks for parallelism and smooth flow
        </p>
      </section>
      </div>

    </main>
  ) 
}