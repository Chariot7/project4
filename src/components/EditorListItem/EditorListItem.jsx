import React from 'react';

function EditorListItem({inputData}) {
    return (
        <>
        {this.state.amount.map(num => 
            <EditorListItem
                inputData={this.state.formData}
            />
            )}
        <ul>
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
        <label> Color Red</label>
            <div className="slidecontainer">
                <input name="colorRed" type="range" min="0" max="255" value={this.state.formData.colorRed} onChange={this.handleChange}class="slider" id="myRangeTwo"/>
            </div>
        </div>
        </li>
        <li>
        <div className="form-group">
        <label> Color Green</label>
            <div className="slidecontainer">
                <input name="colorGreen" type="range" min="0" max="255" value={this.state.formData.colorGreen} onChange={this.handleChange}class="slider" id="myRangeTwo"/>
            </div>
        </div>
        </li>
        <li>
        <div className="form-group">
        <label> Color Blue</label>
            <div className="slidecontainer">
                <input name="colorBlue" type="range" min="0" max="255" value={this.state.formData.colorBlue} onChange={this.handleChange}class="slider" id="myRangeTwo"/>
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
        <div style={{
            height: `${this.state.formData.height}px`,
            width: `${this.state.formData.width}pt`,
            transform: `rotate(${this.state.formData.rotate}deg)`,
            // height: 100,
            border: `${this.state.formData.border}px solid rgb(${this.state.formData.colorRed},${this.state.formData.colorGreen},${this.state.formData.colorBlue})`,
            left: `${this.state.formData.height}px`,
            top: `150px`
        }} >
            <h1 style={{
                fontSize: `${this.state.formData.fontSize}px`,
                transform: `rotate(${this.state.formData.textRotate}deg)`,
                color: `rgb(${this.state.formData.colorRed},${this.state.formData.colorGreen},${this.state.formData.colorBlue})`,
                
            }}>{this.state.formData.text}
            </h1>
            </div>
        
      </>
    )
}

export default EditorListItem