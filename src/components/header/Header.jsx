import React from 'react';
import './Header.css'

function Header() {
    return (
        <>
            <section className='new-to-udemy'>
                <article>
                    <p>New to Genesis? Lucky you.</p>
                    <p>
                    Unlock your potential with free, high-quality courses accessible to everyone, everywhere.
                    </p>
                </article>
                <figure>
                    <img
                        src='https://i.ibb.co/2qHbQqM/download.png'
                        alt='clock'
                    />
                </figure>
            </section>
        </>
    );
}

export default Header;
