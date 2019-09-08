// src/views/EagletonWebDesigns/MobileFirst.jsx
console.info( 'Mounting MobileFirst.jsx... <MobileFirst />' );

// "customer": CLIENT
//........................................
import React from 'react';

export const MobileFirst = ( props ) => (
    <div className="">
                  <header>
            <h1>Blog</h1>           
        </header>
        
        <div className="content" role="main">
            
            <div className="article">
                <h2>Article title</h2>
                <div>08/31/2019</div>
                <br />
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus lacus ut sem cursus, 
                eu pulvinar mi dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia Curae; Integer eget bibendum neque. Praesent aliquet felis vel orci porttitor, 
                eu mattis libero porttitor. Ut erat turpis, sodales non placerat a, vestibulum non enim. 
                Donec luctus dui sapien, vitae luctus nisi posuere nec. Mauris a tempor tellus, et commodo enim. 
                Aenean molestie, nibh semper consectetur tempor, arcu nibh gravida eros, eget ornare felis enim 
                elementum urna. Quisque eu vulputate mauris. Sed tincidunt diam sed lorem congue hendrerit. 
                Vivamus tincidunt lectus dui, quis lobortis nulla vestibulum porttitor. Cras ut suscipit nisi.
                Phasellus maximus vehicula pretium. Aliquam sed ullamcorper orci. Praesent consequat id diam eu euismod.
                </div>                 
            </div>

            <div className="sidebar">
                <h2>Related Articles</h2>
                <nav>
                    <ul>
                        <li><a href="#">Article 1</a></li>              
                        <li><a href="#">Article 2</a></li>                           
                        <li><a href="#">Article 3</a></li>                                                      
                    </ul>
                </nav>
             </div>
        </div>

     </div>
);

export default MobileFirst;

// eof

    