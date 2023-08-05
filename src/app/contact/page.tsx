import { Metadata } from "next"
import  styles  from './page.module.css'
import { Cookies } from "@/components/Cookies/Cookies"

export const metadata: Metadata = {
  title: 'Contacts | CLOUD FLEX',
  description: 'Streaming',
}

export default function Contact() {
  return (
    <main>
      <Cookies />
      <div className={styles.container}>
        <h1 className={styles.title}>Serverless live streaming</h1>
        <section className={styles.sectionText}>
        <h2 className={styles.subtitle}>Challenge</h2>
        <p className={styles.text}>The Video Streaming Platform is a robust and reliable service that supports diverse streaming cases.
          The Platform has unpredictable high load processes related to video streaming and processing – idle periods
          alternated with peak loads, that forced the company to keep a large and expensive on-premise
          infrastructure. In addition, the solution was hard to maintain and control, which decreased the general reliability
          of the system.</p>
      </section>
        <section className={styles.sectionText}>
        <h2 className={styles.subtitle}>Solution</h2>
        <p className={styles.text}>Our team has investigated, proposed and implemented a serverless solution based on AWS Media Services.
          This approach offers the following benefits:</p> 

          <p className={styles.text}>- streaming services optimized by the cloud provider for its infrastructure; 
          <br />- on-demand resources, which resulted in overall infrastructure price reduction; 
          <br />- transfer of maintenance to the Amazon team to increase the reliability of the service; 
          <br />- additional features, e.g. DRM encryption, ads and extended converting options. .</p>
      </section>
        <section className={styles.sectionText}>
        <h2 className={styles.subtitle}>The Result</h2>
        <p className={styles.text}>The Platform becomes a reliable and highly scalable system that allows the business to grow rapidly
          without being blocked by technical constraints. In addition, a service development team can focus
          on the development of a new functionality instead of spending time on load balancing and maintenance.</p>
      </section>
      </div>
    </main>
  )
}