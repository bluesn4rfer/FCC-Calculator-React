import React, { useState } from 'react';
import 'bootstrap';

import './bootstrap.css';
import './style.css';

function App() {
	const [display, setDisplay] = useState("0");
	const [equation, setEquation] = useState("");

	const addToDisplay = (number) => {
		console.log('addToDisplay() invoked');
		setEquation(equation.toString()+number.toString());

		if(!display.match(/[X/\+\-]/)){
			console.log('addToDisplay() display is not an operator');
			if(display != "0"){
				console.log('addToDisplay() setDisplay(display.toString()+number.toString());');
				setDisplay(display.toString()+number.toString());
			}
			else{
				console.log('addToDisplay() setDisplay(number);');
				setDisplay(number);
			}
		}
		else{
			console.log('addToDisplay() setDisplay(number);');
			setDisplay(number);
		}
	};

	const negative = () => {
		console.log('negative() invoked');
		setDisplay(display*-1);
	};

	const decimal = () => {
		console.log('decimal() invoked');
		if(!display.includes(".")){
			setEquation(equation+".");
			setDisplay(display+".");
		}
	};

	const equals = () => {
		console.log('equals() invoked');
		console.log('equals() equation: '+equation);
		let answer = eval(equation).toString();
		console.log('equals() answer: '+answer);
		setEquation(answer);
		setDisplay(answer);
	}

	const clear = () => {
		setEquation("");
		setDisplay("0");
	}

	const setOperator = (op) => {
		let new_equation = equation;
		if(op == 'subtract'){
			if(new_equation[new_equation.length-1].match(/[\-]/)){
				new_equation = new_equation.substring(0, new_equation.length - 1);
			}
		}
		else{
			if((new_equation[new_equation.length-1].match(/[\*\+\-\/]/)) && (new_equation[new_equation.length-2].match(/[\*\+\-\/]/))){
				new_equation = new_equation.substring(0, new_equation.length - 2);
			}
			else if(new_equation[new_equation.length-1].match(/[\*\+\-\/]/)){
				new_equation = new_equation.substring(0, new_equation.length - 1);
			}
		}

		switch(op){
			case "add":
		                setEquation(new_equation+"+");
		                setDisplay("+");
				break;
			case "subtract":
		                setEquation(new_equation+"-");
		                setDisplay("-");
				break;
			case "multiply":
		                setEquation(new_equation+"*");
		                setDisplay("X");
				break;
			case "divide":
		                setEquation(new_equation+"/");
		                setDisplay("/");
				break;
			default:
				break;
		}
	}

	// THIS HANDLES ALL BTN PRESSES
	const btnPressed = (event) => {
		console.log('btnPressed() invoked');
		console.log('btnPressed() event.target.id = '+event.target.id);

		switch(event.target.id){
                        case "clear":
                                clear();
                                break;
                        case "add":
                		console.log('btnPressed() add');
				setOperator("add");
                                break;
                        case "subtract":
                		console.log('btnPressed() subtract');
				setOperator("subtract");
                                break;
                        case "multiply":
                		console.log('btnPressed() multiply');
				setOperator("multiply");
                                break;
                        case "divide":
                		console.log('btnPressed() divide');
				setOperator("divide");
                                break;
			case "equals":
				equals();
				break;
                        case "decimal":
                                decimal(".");
                                break;
                        case "negative":
                                negative();
                                break;
			case "one":
				addToDisplay("1");
				break;
			case "two":
				addToDisplay("2");
				break;
			case "three":
				addToDisplay("3");
				break;
			case "four":
				addToDisplay("4");
				break;
			case "five":
				addToDisplay("5");
				break;
			case "six":
				addToDisplay("6");
				break;
			case "seven":
				addToDisplay("7");
				break;
			case "eight":
				addToDisplay("8");
				break;
			case "nine":
				addToDisplay("9");
				break;
			case "zero":
				addToDisplay("0");
				break;
			default:
				return;
		};
	}

	return (
			<div id="calculator" className="container shadow p-2">
				<div className="row my-1">
					<div className="col-1 p-0"></div>
					<div className="col-10 d-flex justify-content-end text-white font-alarmclock fs-3 px-0">CALCULATOR</div>
					<div className="col-1 p-0"></div>
				</div>
				<div className="row mt-1">
					<div className="col-1 p-0"></div>
					<div className="col-10 d-flex bg-display justify-content-end rounded-top">
						<div className="text-end font-alarmclock fs-6" style={{minHeight: '1.5rem'}}>{equation.replace(/\*/g, 'x')}</div>
					</div>
					<div className="col-1 p-0"></div>
				</div>
				<div className="row mb-1">
					<div className="col-1 p-0"></div>
					<div className="col-10 d-flex bg-display justify-content-end rounded-bottom">
						<div><span id="display" className="align-middle text-end font-alarmclock display-1">{display}</span></div>
					</div>
					<div className="col-1 p-0"></div>
				</div>
				<div className="row my-3">
					<div className="col-1 p-0"></div>
					<div className="col-2 d-grid px-1 py-0"><button id="seven" className="p-0 fw-bold fs-4 btn btn-primary" onClick={btnPressed}>7</button></div>
					<div className="col-2 d-grid px-1 py-0"><button id="eight" className="p-0 fw-bold fs-4 btn btn-primary" onClick={btnPressed}>8</button></div>
					<div className="col-2 d-grid px-1 py-0"><button id="nine" className="p-0 fw-bold fs-4 btn btn-primary" onClick={btnPressed}>9</button></div>
					<div className="col-4 d-grid ps-3 pe-0 py-0"><button id="clear" className="p-0 fw-bold fs-4 btn btn-danger" onClick={btnPressed}>CLEAR</button></div>
					<div className="col-1 p-0"></div>
				</div>
				<div className="row my-3">
					<div className="col-1 p-0"></div>
					<div className="col-2 d-grid px-1 py-0"><button id="four" className="p-0 fw-bold fs-4 btn btn-primary" onClick={btnPressed}>4</button></div>
					<div className="col-2 d-grid px-1 py-0"><button id="five" className="p-0 fw-bold fs-4 btn btn-primary" onClick={btnPressed}>5</button></div>
					<div className="col-2 d-grid px-1 py-0"><button id="six" className="p-0 fw-bold fs-4 btn btn-primary" onClick={btnPressed}>6</button></div>
					<div className="col-2 d-grid ps-3 pe-0 py-0"><button id="multiply" className="p-0 fw-bold fs-4 btn btn-secondary" onClick={btnPressed}>X</button></div>
					<div className="col-2 d-grid ps-3 pe-0 py-0"><button id="divide" className="p-0 fw-bold fs-4 btn btn-secondary" onClick={btnPressed}>/</button></div>
					<div className="col-1 p-0"></div>
				</div>
				<div className="row my-3">
					<div className="col-1 p-0"></div>
					<div className="col-2 d-grid px-1 py-0"><button id="one" className="p-0 fw-bold fs-4 btn btn-primary" onClick={btnPressed}>1</button></div>
					<div className="col-2 d-grid px-1 py-0"><button id="two" className="p-0 fw-bold fs-4 btn btn-primary" onClick={btnPressed}>2</button></div>
					<div className="col-2 d-grid px-1 py-0"><button id="three" className="p-0 fw-bold fs-4 btn btn-primary" onClick={btnPressed}>3</button></div>
					<div className="col-2 d-grid ps-3 pe-0 py-0"><button id="add" className="p-0 fw-bold fs-3 btn btn-secondary" onClick={btnPressed}>+</button></div>
					<div className="col-2 d-grid ps-3 pe-0 py-0"><button id="subtract" className="p-0 fw-bold fs-3 btn btn-secondary" onClick={btnPressed}>-</button></div>
					<div className="col-1 p-0"></div>
				</div>
				<div className="row my-3">
					<div className="col-1 p-0"></div>
					<div className="col-2 d-grid px-1 py-0"><button id="negative" className="p-0 fw-bold fs-4 btn btn-primary" onClick={btnPressed}>+/-</button></div>
					<div className="col-2 d-grid px-1 py-0"><button id="zero" className="p-0 fw-bold fs-4 btn btn-primary" onClick={btnPressed}>0</button></div>
					<div className="col-2 d-grid px-1 py-0"><button id="decimal" className="p-0 fw-bold fs-4 btn btn-primary" onClick={btnPressed}>.</button></div>
					<div className="col-4 d-grid ps-3 pe-0 py-0"><button id="equals" className="p-0 fw-bold fs-3 btn btn-warning" onClick={btnPressed}>=</button></div>
					<div className="col-1 p-0"></div>
				</div>
			</div>
  	);
}

export default App;
