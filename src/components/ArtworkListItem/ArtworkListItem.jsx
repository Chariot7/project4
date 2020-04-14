import React from 'react';
import {Link} from 'react-router-dom';
import './ArtworkListItem.css'

function ArtworkListItem({artwork, handleDeleteArtwork}) {
    return (
        <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{artwork.title}</h3>
      </div>
      <div className='panel-footer ArtworkListItem-action-panel'>
        <Link
          className='btn btn-xs btn-info'
          to={{
            pathname: '/details',
            state: {artwork}
          }}
        >
          DETAILS
        </Link>
        <Link
          className='btn btn-xs btn-warning margin-left-10'
          to={{
            pathname: '/edit',
            state: {artwork}
          }}
        >
          EDIT
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteArtwork(artwork._id)}
        >
          DELETE
        </button>
      </div>
    </div>
    );
}

export default ArtworkListItem