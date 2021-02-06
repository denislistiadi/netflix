import React from "react";
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

    // browse container

    return (
        <BrowseContainer slides={slides} />
    )
}