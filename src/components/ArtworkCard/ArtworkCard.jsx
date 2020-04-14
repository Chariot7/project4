import React from 'react';
import {Link} from 'react-router-dom';

function ArtworkCard({artwork}) {
    return (
        <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{artwork.title}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Year</dt>
          <dd>{artwork.year}</dd>
          <dt>Signature</dt>
          <dd>{artwork.signature}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/artworks'>RETURN TO LIST</Link>
      </div>
    </div>
    )
}

export default ArtworkCard;