import React, { Component } from 'react';
import "../App.css"

class Calculadora extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expression: "",
            memory: "",
        }

        this.cuandoNumeroPresionado = this.cuandoNumeroPresionado.bind(this)
        this.cuandoOperadorPresionado = this.cuandoOperadorPresionado.bind(this)
        this.calcularValorFinal = this.calcularValorFinal.bind(this)
        this.botonAC = this.botonAC.bind(this)
        this.botonDel = this.botonDel.bind(this)
    }

    //cuando los números son presionados
    cuandoNumeroPresionado(event) {
        let inputString = this.state.expression + event.currentTarget.value;
        this.setState({expression: inputString});
    }

    //cuando botones (+ - * /) son presionados
    cuandoOperadorPresionado(event) {
        let inputString = this.state.expression;
        if (inputString !== "" && inputString.length > 0) {
        let lastIndexChar = inputString.charAt(inputString.length - 1);
        if (lastIndexChar !== event.currentTarget.value && lastIndexChar.match(/^([0-9])$/)) { //match(/^([0-9])$/) comprueba si es número
            inputString = this.state.expression + event.currentTarget.value;
            this.setState({ expression: inputString });
        }
        }
    };

    //Calcular el valor final cuando el botón (=) es presionado
    calcularValorFinal() {
        let inputExpression = this.state.expression;
        if (inputExpression !== "" && inputExpression.length > 0) {
        let lastIndexChar = inputExpression.charAt(inputExpression.length - 1);
        if (!lastIndexChar.match(/^([0-9])$/)) {
            inputExpression = inputExpression.substring(0, inputExpression.length - 1);
        }
        //using eval() para calcular la expresión matemática
        let finalOutput = eval(inputExpression);
        this.setState({ expression: finalOutput.toString() });
        this.setState({memory: inputExpression});
        }
    };

    //cuando el botón (AC) es presionado
    botonAC() {
        this.setState({ expression: "" });
    };

    //cuando el botón (DEL) es presionado
    botonDel() {
        let inputExpression = this.state.expression;
        inputExpression = inputExpression.substring(0, inputExpression.length - 1);
        this.setState({ expression:inputExpression });
    };


    render() {
        return (
        <React.Fragment>
            <div className="calculator-grid">
            <div className="salida">
                <div className="operador-previo">{this.state.memory}</div>
                <div className="operador-actual">{this.state.expression || "0"}</div>
            </div>
            <button class="span-dos" onClick={this.botonAC}>AC</button>
            <button onClick={this.botonDel}>DEL</button>
            <button onClick={this.cuandoOperadorPresionado} value="/">÷</button>
            <button onClick={this.cuandoNumeroPresionado} value="1">1</button>
            <button onClick={this.cuandoNumeroPresionado} value="2">2</button>
            <button onClick={this.cuandoNumeroPresionado} value="3">3</button>
            <button onClick={this.cuandoOperadorPresionado} value="*">x</button>
            <button onClick={this.cuandoNumeroPresionado} value="4">4</button>
            <button onClick={this.cuandoNumeroPresionado} value="5">5</button>
            <button onClick={this.cuandoNumeroPresionado} value="6">6</button>
            <button onClick={this.cuandoOperadorPresionado} value="+">+</button>
            <button onClick={this.cuandoNumeroPresionado} value="7">7</button>
            <button onClick={this.cuandoNumeroPresionado} value="8">8</button>
            <button onClick={this.cuandoNumeroPresionado} value="9">9</button>
            <button onClick={this.cuandoOperadorPresionado} value="-">-</button>
            <button onClick={this.cuandoOperadorPresionado} value=".">.</button>
            <button onClick={this.cuandoNumeroPresionado} value="0">0</button>
            <button class="span-dos" onClick={this.calcularValorFinal}>=</button>
            </div>
        </React.Fragment>
        )
    }
}

export default Calculadora;