import React, {Component} from 'react';

class AddArtworkPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            title: '',
            year: '',
            signature: 'yes',
            name: ''
        },
        
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.props)
        this.props.handleAddArtwork(this.state.formData);
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    // handleChangeArtist = e => {
    //     const formDataRef = {...this.state.formDataRef, [e.target.name]: e.target.value};
    //     this.setState({
    //         formData,
    //         invalidForm: !this.formRef.current.checkValidity()
    //     });
    // };

    render() {
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