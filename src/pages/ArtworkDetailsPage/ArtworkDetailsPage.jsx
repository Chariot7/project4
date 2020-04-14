import React from 'react';
import ArtworkCard from '../../components/ArtworkCard/ArtworkCard';

function ArtworkDetailPage(props) {
    const artwork = props.location.state.artwork;
    return (
        <>
            <h1> Artwork Details</h1>
            <ArtworkCard
                key={artwork._id}
                artwork={artwork}
            />
            </>
    );
}

export default ArtworkDetailPage;