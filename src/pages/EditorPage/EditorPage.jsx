import React, {Component} from 'react';
import { render } from '@testing-library/react';
import './EditorPage.css'
import EditorListItem from '../../components/EditorListItem/EditorListItem'

class EditorPage extends Component {
    state = {
        formData: {
            height: 50,
            width: 50,
            rotate: 0,
            colorRed: 200,
            colorBlue: 200,
            colorGreen: 0,
            backgroundRed: 0,
            backgroundBlue:0,
            backgroundGreen: 0,
            text: '',
            spacing: 3,
            fontSize: 150,
            textRotate: 0,
            border: 6,
            amount: 3,
            amountArr: [],
            switch: false,
            switchRotate: false,
            secondColorSel: false,
            secondRed: 100,
            secondBlue: 0,
            secondGreen: 0,
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
    const formData = {
        ...this.state.formData,
        switchRotate: !this.state.formData.switchRotate
    }
    this.setState({
        formData
    });
};

handleChangeThree = e => {
    const backgroundSelected = !this.state.backgroundSelected
    this.setState({
        backgroundSelected
    });
    console.log(this.state.backgroundSelected, 'this is background selected')
};

handleChangeFour = e => {
    console.log(e.target)
    const formData = {
        ...this.state.formData,
        switch: !this.state.formData.switch
    }
    this.setState({
        formData
    });
};
handleChangeSwitchColor = e => {
    const formData = {
        ...this.state.formData,
        secondColorSel: !this.state.formData.secondColorSel
    }
    this.setState({
        formData
    });
    console.log(this.state.formData.secondColorSel, 'this is color selected')
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
                <input orient="vertical" name="amount" type="range" min="0" max="200" value={this.state.formData.amount} onChange={this.handleChange}class="slider" id="myRange"/>
            </div>
        </div>
        </li>
        <li>
        <div className="form-group">
        <label>Variate</label>
            <div className="slidecontainer">
                <input name="switch" type="checkbox"  onChange={this.handleChangeFour} class="slider" id="myRangeTwo"/>
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
                <input name="border" type="range" min=".5" max="200" value={this.state.formData.border} onChange={this.handleChange}class="slider" id="myRangeTwo"/>
            </div>
        </div>
        </li>

        <li>
        <div className="form-group">
        <label>Spacing</label>
            <div className="slidecontainer">
                <input name="spacing" type="range" min="0" max="50" value={this.state.formData.spacing} onChange={this.handleChange}class="slider" id="myRangeTwo"/>
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
        <label>Second Color</label>
            <div className="slidecontainer">
                <input name="secondColorSelected" type="checkbox"  onChange={this.handleChangeSwitchColor} class="slider" id="myRangeTwo"/>
            </div>
        </div>
        </li>
        <li>
        <div className="form-group">
        <label> Color Red</label>
            <div className="slidecontainer">
    <input name={this.state.backgroundSelected ? "backgroundRed" : this.state.formData.secondColorSel ? "secondRed" : "colorRed"} type="range" min="0" max="255" value={this.state.backgroundSelected ? this.state.formData.backgroundRed : this.state.secondColorSel ? this.state.formData.secondRed : this.state.formData.colorRed} onChange={this.handleChange}class="slider" id="myRangeTwo"/>
            </div>
        </div>
        </li>
        <li>
        <div className="form-group">
        <label> Color Green</label>
            <div className="slidecontainer">
                <input name={this.state.backgroundSelected ? "backgroundGreen" : this.state.formData.secondColorSel ? "secondGreen" : "colorGreen"} type="range" min="0" max="255" value={this.state.backgroundSelected ? this.state.formData.backgroundGreen : this.state.secondColorSel ? this.state.formData.secondGreen : this.state.formData.colorGreen} onChange={this.handleChange}class="slider" id="myRangeTwo"/>
            </div>
        </div>
        </li>
        <li>
        <div className="form-group">
        <label> Color Blue</label>
            <div className="slidecontainer">
                <input name={this.state.backgroundSelected ? "backgroundBlue" : this.state.formData.secondColorSel ? "secondBlue" : "colorBlue"} type="range" min="0" max="255" value={this.state.backgroundSelected ? this.state.formData.backgroundBlue : this.state.secondColorSel ? this.state.formData.secondBlue : this.state.formData.colorBlue} onChange={this.handleChange}class="slider" id="myRangeTwo"/>
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
            zIndex: "-1",
            transform: this.state.formData.switch  ? `matrix3d(2,0,0.00,0.0032,0.00,0.98,0.21,0.00,0,-0.21,0.98,0,0,0,0,1)` : `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)`,
        }}>
       {this.createAmount()}
       </ul>
       {this.state.formData.switch ?
        <ul style={{
            zIndex: "-1",
            transform: this.state.formData.switch  ? `matrix3d(2,0,0.00,-0.0032,0.00,0.98,0.21,0.00,0,-0.21,0.98,0,0,0,0,1)` : `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)`,
        }}>
       {this.createAmount()} 
       </ul>
       : null
        }
       
       <div style={{
           height: '60vh'
       }}></div>
      </div>
    )
}

}

export default EditorPage;