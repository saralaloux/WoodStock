import React from 'react';

const Shop = () => {
    return (
        <div className='shop'>
           <h2 className='title_team'><span>Creative team</span></h2>
            <section className='team_pic'></section>
            <section className='section_shop'>
            <article className='title_shop'>
                <h2 className='title_goog'><span>Goog mindset</span></h2>
            </article>
                <article>
                    <p  className='text_team'>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.</p>
                </article>
                <article className='button'>
                    <button>Meat de team</button>
                </article>
            </section>
        </div>
    );
};

export default Shop;