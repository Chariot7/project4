import React from 'react';
import ArtworkListItem from '../../components/ArtworkListItem/ArtworkListItem';
import './ArtworkListPage.css';

function ArtworkListPage(props) {
    return (
        <React.Fragment>
            <h1>Artworks</h1>
            <div className='ArtworkListPage-grid'>
                {props.artworks.map(artwork =>
                    <ArtworkListItem
                        artwork={artwork}
                        handleDeleteArtwork={props.handleDeleteArtwork}
                        key={artwork._id}
                        />
                    )}
            </div>
        </React.Fragment>
    );
}

export default ArtworkListPage;