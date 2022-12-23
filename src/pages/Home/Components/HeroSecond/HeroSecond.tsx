import HeaderSecond from '../../../../components/HeaderSecond/HeaderSecond'
import styles from './HeroSecond.module.css'
import SmartButton from '../../../../components/Button/Button'
import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import { useInView } from 'react-intersection-observer'
import Button from '../../../../components/Button/Button'
export default function HeroSecond() {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  return (
    <div ref={ref}>
      <HeaderSecond backgroundColorProps={'none'} />
      <Wrapper backgroundColor="var(--background-pinterest-component)">
        <div className={styles['container']}>
          <div className={styles['content']}>
            <h1
              className={styles['paragraph-h1']}
              style={{
                opacity: inView ? '1' : '0',
                transition: '1s',
                marginLeft: inView ? '0px' : '-20px',
              }}
            >
              Choose What Matters
              <br /> To Your Business & Your <br /> Customers.
            </h1>
            <p
              className={styles['paragraph-p']}
              style={{
                opacity: inView ? '1' : '0',
                transition: '1s',
                marginLeft: inView ? '0px' : '-20px',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              in digni ssim euismod purus donec mus vulputate habitant iaculis.
              Com odo enim ornare turpis tempus enim, nibh nulla. Rhoncus sed.
            </p>

            <Button type="button">Get Start Now</Button>
          </div>
          <div
            className={styles['image']}
            style={{
              opacity: inView ? '1' : '0',
              transition: '1s',
              marginTop: inView ? '0px' : '-20px',
            }}
          >
            <img src="/src/assets/images/at-work-pana.svg" alt="at-work-pana" />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
