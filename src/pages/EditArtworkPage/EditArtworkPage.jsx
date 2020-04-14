import React, {Component} from 'react';
import{Link} from 'react-router-dom';

class EditArtworkPage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.artwork
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateArtwork(this.state.formData);
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <>
            <h1>Edit Artwork</h1>
            <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Artwork Title (required)</label>
                <input
                  className="form-control"
                  name="title"
                  value={this.state.formData.title}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Artwork Year (required)</label>
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
              <button
                type="submit"
                className="btn btn-xs"
                disabled={this.state.invalidForm}
              >
                SAVE ARTWORK
              </button>&nbsp;&nbsp;
              <Link to='/artworks'>CANCEL</Link>
            </form>
          </>
        )
    }
}

export default EditArtworkPage;