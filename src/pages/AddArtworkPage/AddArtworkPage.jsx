import React, {Component} from 'react';
import ReactSlider from 'react-slider'

class AddArtworkPage extends Component {
    state = {
        invalidForm: true,
        formData: {
              title: '',
              year: '',
              signature: 'yes',
              name: '',
              value: 10
        },
        
    };
    formRef = React.createRef();
    
    handleSubmit = e => {
      e.preventDefault();
      this.props.handleAddArtwork(this.state.formData);
    };
    
    handleChange = e => {
      // console.log(this.props.artists, "this.props.artists")
      const formData = {
        ...this.state.formData,
        [e.target.name]: e.target.value
      }
      this.setState({
        formData,
        invalidForm: !this.formRef.current.checkValidity()
      });
    };
    
    
    
    render() {
      // console.log(this.props.artists)
        return (
            <>
        <h1>Add Artwork</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label> Title (required)</label>
            <input
              className="form-control"
              name="title"
              value={this.state.formData.title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Year (required)</label>
            <input
              className="form-control"
              name="year"
              value={this.state.formData.year}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Signature</label>
            <input
              className="form-control"
              name="signature"
              value={this.state.formData.signature}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Artist Name</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Artist Name</label>
            <select value={this.state.formData.name} onChange={this.handleChange}>
              {this.props.artists.map((artist, index) => 
            <option key={index} value="{artist.name}">{artist.name}</option>
              )}
          </select>
          </div>
          <div className="form-group">
            <label>Previous Artworks</label>
            <select value={this.state.formData.name} onChange={this.handleChange}>
              {this.props.artworks.map(artwork => 
            <option key={artwork.title} value="{artwork.title}">{artwork.title}</option>
              )}
          </select>
          </div>
          {/* <div className="form-group">
            <label>SLider</label>
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              renderThumb={(props, state) => <div {...props}>{this.state.formData.value}</div>}
/>
          </div> */}
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            ADD ARTWORK
          </button>
        </form>
      </>
        );
    }
}

export default AddArtworkPage;