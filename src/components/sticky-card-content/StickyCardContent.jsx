import React, {useEffect, useState} from 'react';
import styles from './StickyCardContent.module.css';
import ThisCourseIncludes from '../this-course-includes/ThisCourseIncludes';

function StickyCardContent({details, additionalDetails}) {
    const {image_750x422: image} = details;

    const [hidden, toggleHidden] = useState(false);

    const handleStyles = () => {
        if (window.scrollY > 400) {
            toggleHidden(true);
        } else {
            toggleHidden(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleStyles);
    }, []);

    return (
        <main
            className={styles.mainContainer}
            style={{
                position: 'absolute',
                marginTop: hidden ? '1rem' : '0',
                boxShadow: hidden ? '0 10px 10px #c2c9d6' : 'none'
            }}
        >
            <figure className={hidden ? styles.hide : styles.imageWrapper}>
                <img
                    className='d-block w-100'
                    src={image}
                    alt=''
                />
            </figure>
            <div className={styles.cardBody}>
                <button
                    className={[styles.addToCartButton, styles.button].join(
                        ' '
                    )}
                >
                    Add to cart
                </button>
                <button
                    className={[styles.buyNowButton, styles.button].join(' ')}
                >
                    Enroll now
                </button>
                <ThisCourseIncludes details={additionalDetails}/>
                <section className={styles.buttonsWrapper}>
                    <button className={styles.footerButton}>Share</button>
                    <button className={styles.footerButton}>
                        Gift this course
                    </button>
                </section>
                <section className={styles.training}>
                    <p className={styles.trainingSectionTitle}>
                        Training 5 or more people?
                    </p>
                    <p className={styles.trainingSectionText}>
                        Get your team access to 17,000+ top Genesis courses
                        anytime, anywhere.
                    </p>
                    <button className={styles.tryUdemyBusinessButton}>
                        Try Genesis Business
                    </button>
                </section>
            </div>
        </main>
    );
}

export default StickyCardContent;
