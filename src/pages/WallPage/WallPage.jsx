import React, {Component} from 'react';
import { render } from '@testing-library/react';
import './WallPage.css'
import EditorListItem from '../../components/EditorListItem/EditorListItem'

class WallPage extends Component {
    state = {
        formData: {
            height: 50,
            width: 50,
            rotate: 0,
            colorRed: 0,
            colorBlue: 0,
            colorGreen: 0,
            backgroundRed: 0,
            backgroundBlue:0,
            backgroundGreen: 0,
            text: '',
            fontSize: 150,
            textRotate: 0,
            border: 6,
            amount: 3,
            amountArr: [],
            switchRotate: false,
        },
        backgroundSelected: false,
    }

    
    

formRef = React.createRef();

createAmount = () => {
    let amountArr = []

    for(let i = 0; i<this.state.formData.amount; i++){
        amountArr.push(<EditorListItem
        inputData={this.state.formData}
        handleChange={this.handleChange}
        idx={i}
    />)
    }
    return amountArr
}

handleChange = e => {
    const formData = {
        ...this.state.formData,
        [e.target.name]: e.target.value
    }
    this.setState({
        formData
    });
};
handleChangeTwo = e => {
    console.log(e.target)
    const formData = {
        ...this.state.formData,
        switchRotate: !this.state.formData.switchRotate
    }
    this.setState({
        formData
    });
    console.log(this.state.formData.switchRotate)
};

handleChangeThree = e => {
    const backgroundSelected = !this.state.backgroundSelected
    this.setState({
        backgroundSelected
    });
    console.log(this.state.backgroundSelected, 'this is background selected')
};

handleBackgroundSelected = e => {
    this.props.handleBackground(this.state.background)
}

render() {
    
    return ( 
        < div style={{
            backgroundColor: `rgb(${this.state.formData.backgroundRed},${this.state.formData.backgroundGreen},${this.state.formData.backgroundBlue})` 
        }}>
       
         <ul>
        <li>
        <div className="form-group">
        <label>Amount</label>
            <div className="slidecontainer">
                <input orient="vertical" name="amount" type="range" min="0" max="100" value={this.state.formData.amount} onChange={this.handleChange}class="slider" id="myRange"/>
            </div>
        </div>
        </li>
        <li>
        <div className="form-group">
        <label>Height</label>
            <div className="slidecontainer">
                <input orient="vertical" name="height" type="range" min="0" max="1000" value={this.state.formData.height} onChange={this.handleChange}class="slider" id="myRange"/>
            </div>
        </div>
        </li>
        <li>
        <div className="form-group">
        <label> Width</label>
            <div className="slidecontainer">
                <input name="width" type="range" min="0" max="1000" value={this.state.formData.width} onChange={this.handleChange}class="slider" id="myRangeTwo"/>
            </div>
        </div>
        </li>
        <li>
        <div className="form-group">
        <label> Border Thickness</label>
            <div className="slidecontainer">
                <input name="border" type="range" min="2" max="200" value={this.state.formData.border} onChange={this.handleChange}class="slider" id="myRangeTwo"/>
            </div>
        </div>
        </li>
        <li>
        <div className="form-group">
        <label>Background Color</label>
            <div className="slidecontainer">
                <input name="backgroundSelected" type="checkbox"  onChange={this.handleChangeThree} class="slider" id="myRangeTwo"/>
            </div>
        </div>
        </li>
        <li>
        <div className="form-group">
        <label> Color Red</label>
            <div className="slidecontainer">
    <input name={this.state.backgroundSelected ? "backgroundRed" : "colorRed"} type="range" min="0" max="255" value={this.state.backgroundSelected ? this.state.formData.backgroundRed : this.state.formData.colorRed} onChange={this.handleChange}class="slider" id="myRangeTwo"/>
            </div>
        </div>
        </li>
        <li>
        <div className="form-group">
        <label> Color Green</label>
            <div className="slidecontainer">
                <input name={this.state.backgroundSelected ? "backgroundGreen" : "colorGreen"} type="range" min="0" max="255" value={this.state.backgroundSelected ? this.state.formData.backgroundGreen : this.state.formData.colorGreen} onChange={this.handleChange}class="slider" id="myRangeTwo"/>
            </div>
        </div>
        </li>
        <li>
        <div className="form-group">
        <label> Color Blue</label>
            <div className="slidecontainer">
                <input name={this.state.backgroundSelected ? "backgroundBlue" : "colorBlue"} type="range" min="0" max="255" value={this.state.backgroundSelected ? this.state.formData.backgroundBlue : this.state.formData.colorBlue} onChange={this.handleChange}class="slider" id="myRangeTwo"/>
            </div>
        </div>
        </li>
        <li>
        <div className="form-group">
        <label> Rotate</label>
            <div className="slidecontainer">
                <input name="rotate" type="range" min="0" max="500" value={this.state.formData.rotate} onChange={this.handleChange}class="slider" id="myRangeTwo"/>
            </div>
        </div>
        </li>
        <li>
        <div className="form-group">
        <label>Switch Rotate</label>
            <div className="slidecontainer">
                <input name="switchRotate" type="checkbox"  onChange={this.handleChangeTwo} class="slider" id="myRangeTwo"/>
            </div>
        </div>
        </li>
        <li>
        <div className="form-group">
        <label> Text</label>
            <div className="slidecontainer">
                <input name="text" type="text"  value={this.state.formData.text} onChange={this.handleChange}class="slider" id="myRangeTwo"/>
            </div>
        </div>
        </li>
        <li>
        <div className="form-group">
        <label> Font Size</label>
            <div className="slidecontainer">
                <input name="fontSize" type="range" min="0" max="500" value={this.state.formData.fontSize} onChange={this.handleChange}class="slider" id="myRangeTwo"/>
            </div>
        </div>
        </li>
        <li>
        <div className="form-group">
        <label> Text Rotate</label>
            <div className="slidecontainer">
                <input name="textRotate" type="range" min="0" max="500" value={this.state.formData.textRotate} onChange={this.handleChange}class="slider" id="myRangeTwo"/>
            </div>
        </div>
        </li>
        </ul>
        <ul style={{
            // transform: `rotate(-${this.state.formData.rotate}deg)`
        }}>
       {this.createAmount()}
       </ul>
       <div style={{
           height: '60vh'
       }}></div>
      </div>
    )
}

}

export default WallPage;