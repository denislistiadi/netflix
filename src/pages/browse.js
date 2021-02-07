import React from "react";
import Helmet from 'react-helmet';
import { BrowseContainer } from "../containers/browse";
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

export default function Browse() {
    
    // series and films
    const { series } = useContent('series');
    const { films } = useContent('films');

    // slides
    const slides = selectionFilter({ series, films });
    console.log(slides);

    return (
        <>
        <Helmet>
            <title>Browse - Netflix Clone</title>
        </Helmet>
        <BrowseContainer slides={slides} />
        </>
    )
}