// MetadataPage.jsx: consumer/client module @containers or views directory

import React from 'react';
//import { MetaTags } from 'meta-tags';
import MetaTags from '../../components/Metadata/MetaTags';


const metaData = {  // 3 attempt
    title: "My Website", 
    description: "My Website w/Metadata using React-Helmet",
    keywords: "My Website, Metadata, React-Helmet NPM",
    robots: "",
    canonicalUrl: "http://my-website.com"        
}


class MetadataPage extends React.Component {
    constructor(props) {
        super(props);  
        
        // this.state = {
            // title: "My Website", 
            // description: "My Website w/Helmet",
            // keywords: "My Website, React Helmet NPM",
            // robots: "",
            // canonicalUrl: "http://my-website.com"        
        // }    
    }
    
    render() {
        // this.props = {
            // title: "My Website", 
            // description: "My Website w/Helmet",
            // keywords: "My Website, React Helmet NPM",
            // robots: "",
            // canonicalUrl: "http://my-website.com"        
        
        //const metaData = ""; 
        //const metaData = this.props;  // 1st attempt
        //const metaData = this.state;  // 2nd attempt
               
        return (
            <div>
                <MetaTags metaData={metaData} />
            </div>
        );
    }
}

export default MetadataPage;

// eof
