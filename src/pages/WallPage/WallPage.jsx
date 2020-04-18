import React, {Component} from 'react';
import { render } from '@testing-library/react';
// import './WallPage.css'

class WallPage extends Component {
    state = {
        formData: {
            height: 0,
            width: 10
        }
    }


formRef = React.createRef();

handleChange = e => {
    console.log(this.state.formData.height)
    const formData = {
        ...this.state.formData,
        [e.target.name]: e.target.value
    }
    this.setState({
        formData
    });
};

render() {
    return ( 
        <>
        <div style={{
            height: `${this.state.formData.height}px`,
            width: `${this.state.formData.width}pt`,
            transform: `rotate(-${this.state.formData.height}deg)`,
            // height: 100,
            border: `6px solid rgb(${this.state.formData.width},${this.state.formData.height},${this.state.formData.height})`,
            left: `${this.state.formData.height}px`,
            top: `150px`
        }} >Add Dimensions</div>
        <div style={{
            height: `${this.state.formData.height}%`,
            width: `${this.state.formData.width}%`,
            transform: `rotate(-${this.state.formData.height}deg)`,
            // height: 100,
            border: `6px solid rgb(${this.state.formData.width},${this.state.formData.height},${this.state.formData.height})`,
            left: `${this.state.formData.height}px`,
            top: `150px`
            }} 
            >Add Dimension</div>
        <div style={{
            height: `${this.state.formData.height}%`,
            width: `${this.state.formData.width}%`,
            transform: `rotate(${this.state.formData.height}deg)`,
            // height: 100,
            border: `6px solid rgb(${this.state.formData.width},${this.state.formData.height},${this.state.formData.height})`,
            left: `${this.state.formData.height}px`,
            top: `150px`
            }} 
            >Add Dimension</div>
        <div style={{
            height: `${this.state.formData.height}%`,
            width: `${this.state.formData.width}%`,
            transform: `rotate(-${this.state.formData.height}deg)`,
            // height: 100,
            border: `6px solid rgb(${this.state.formData.width},${this.state.formData.height},${this.state.formData.height})`,
            left: `${this.state.formData.height}px`,
            top: `150px`
            }} 
            >Add Dimension</div>
        <div style={{
            height: `${this.state.formData.height}%`,
            width: `${this.state.formData.width}%`,
            transform: `rotate(${this.state.formData.height}deg)`,
            // height: 100,
            border: `6px solid rgb(${this.state.formData.width},${this.state.formData.height},${this.state.formData.height})`,
            left: `${this.state.formData.height}px`,
            top: `150px`
            }} 
            >Add Dimension</div>
        <div style={{
            height: `${this.state.formData.height}px`,
            width: `${this.state.formData.width}vw`,
            transform: `rotate(-${this.state.formData.height}deg)`,
            // height: 100,
            border: `6px solid rgb(${this.state.formData.width},${this.state.formData.height},${this.state.formData.height})`,
            left: `${this.state.formData.height}px`,
            top: `150px`
            }} 
            >Add Dimension</div>
        <div style={{
            height: `${this.state.formData.height}px`,
            width: `${this.state.formData.width}vw`,
            transform: `rotate(${this.state.formData.height}deg)`,
            // height: 100,
            border: `6px solid rgb(${this.state.formData.width},${this.state.formData.height},${this.state.formData.height})`,
            left: `${this.state.formData.height}px`,
            top: `150px`
            }} 
            >Add Dimension</div>
        <div style={{
            height: `${this.state.formData.height}px`,
            width: `${this.state.formData.width}vw`,
            transform: `rotate(-${this.state.formData.height}deg)`,
            // height: 100,
            border: `6px solid rgb(${this.state.formData.width},${this.state.formData.height},${this.state.formData.height})`,
            left: `${this.state.formData.height}px`,
            top: `150px`
            }} 
            >Add Dimension</div>
        <div style={{
            height: `${this.state.formData.height}px`,
            width: `${this.state.formData.width}vw`,
            transform: `rotate(${this.state.formData.height}deg)`,
            // height: 100,
            border: `6px solid rgb(${this.state.formData.width},${this.state.formData.height},${this.state.formData.height})`,
            left: `${this.state.formData.height}px`,
            top: `150px`
            }} 
            >Add Dimension</div>
        <h1 style={{
            fontSize: `${this.state.formData.height}px`,
            width: `${this.state.formData.width}vw`,
            transform: `rotate(${this.state.formData.height}deg)`,
            // height: 100,
            border: `${this.state.formData.height}px solid black`
            }} 
            >Add Dimension</h1>
        <form ref={this.formRef}
        autoComplete="off"
        // onSubmit={this.handleSubmit}
        >

          <div className="form-group">
            <label>Height</label>
            <div className="slidecontainer">
          <input orient="vertical" name="height" type="range" min="1" max="1000" value={this.state.formData.height} onChange={this.handleChange}class="slider" id="myRange"/>
          </div>
          </div>
          <div className="form-group">
            <label> Width</label>
            <div className="slidecontainer">
          <input name="width" type="range" min="1" max="100" value={this.state.formData.width} onChange={this.handleChange}class="slider" id="myRangeTwo"/>
          </div>
          </div>
          
          <button
            type="submit"
            className="btn"
            // disabled={this.state.invalidForm}
          >
            ADD DIMENSIONS
          </button>
        </form>
        <h1 style={{
            height: `${this.state.formData.height}px`,
            width: `${this.state.formData.width}px`,
            // height: 100,
            border: '1px solid black'
            }} >Add Dimensions</h1>
        <div style={{
            height: `${this.state.formData.height}%`,
            width: `${this.state.formData.width}%`,
            // height: 100,
            border: '1px solid black'
            }} 
            ></div>
      </>
    )
}

}

export default WallPage;