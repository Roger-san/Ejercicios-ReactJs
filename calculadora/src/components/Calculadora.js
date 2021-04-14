/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React from "react"

class Calculadora extends React.Component {
  constructor() {
    super()
    this.state = {
      num1: "",
      num2: "",
      simbol: "",
      first: true
    }
  }
  buttons = [
    "%",
    "/",
    "C",
    "DEL",
    "7",
    "8",
    "9",
    "X",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "+/-",
    "0",
    ",",
    "="
  ]
  render() {
    const handleClick = (e) => {
      const { num1, num2, symbol, first } = this.state
      const targetId = e.target.id
      const type = e.target.className

      const calculate = () => {
        switch (symbol) {
          case "/":
            this.setState(
              {
                num1: num1 / num2,
                symbol: targetId !== "=" ? targetId : "",
                num2: "",
                first: false
              },
              log()
            )
            break
          case "%":
            this.setState(
              {
                num1: (num1 / 100) * num2,
                symbol: targetId !== "=" ? targetId : "",
                num2: "",
                first: false
              },
              log()
            )
            break
          case "X":
            this.setState(
              {
                num1: num1 * num2,
                symbol: targetId !== "=" ? targetId : "",
                num2: "",
                first: false
              },
              log()
            )
            break
          case "+":
            this.setState(
              {
                num1: parseInt(num1) + parseInt(num2),
                symbol: targetId !== "=" ? targetId : "",
                num2: "",
                first: false
              },
              log()
            )
            break
          case "-":
            this.setState(
              {
                num1: parseInt(num1) - parseInt(num2),
                symbol: targetId !== "=" ? targetId : "",
                num2: "",
                first: false
              },
              log()
            )
            break
        }
      }
      const log = () => {
        console.log("numero1", num1, "numero2", num2, "id", targetId, "symbol", symbol)
      }
      const del = () => {
        if (num2) this.setState({ num2: num2.slice(0, num2.length - 1) }, log())
        else if (symbol) this.setState({ symbol: "" })
        else this.setState({ num1: String(num1).slice(0, String(num1).length - 1) })
      }
      const reset = () => this.setState({ num1: "", num2: "", symbol: "", first: true })

      const posNeg = () => {
        first
          ? this.setState({ num1: num1 > 0 ? -num1 : String(num1).slice(1) }, log())
          : this.setState({ num2: num2 > 0 ? -num2 : String(num2).slice(1) }, log())
      }

      if (type === "number") {
        if (first) this.setState({ num1: num1 + targetId }, log())
        else if (!first && symbol) this.setState({ num2: num2 + targetId }, log())
      } else if (type === "symbol") {
        if (!symbol) this.setState({ symbol: targetId, first: false }, log())
        else if (symbol && num2) {
          calculate()
        }
      } else if (type === "especialCharacters") {
        switch (targetId) {
          case "DEL":
            del()
            break
          case "C":
            reset()
            break
          case "+/-":
            posNeg()
            break
          case "=":
            calculate()
            break
        }
      }
    }
    const type = (button) => {
      const especialCharacters = ["DEL", "C", "=", "+/-"]
      if (!isNaN(button)) {
        return "number"
      } else if (!especialCharacters.includes(button)) {
        return "symbol"
      } else return "especialCharacters"
    }
    return (
      <div className="calculator">
        <div className="window">
          <span className="num1">{this.state.num1 ? this.state.num1 : "0"}</span>
          <span className="symbol">{this.state.symbol}</span>
          <span className="num2">{this.state.num2}</span>
        </div>
        <div className="buttons">
          {this.buttons.map((button, i) => (
            <button key={i} id={button} className={type(button)} onClick={handleClick}>
              {button}
            </button>
          ))}
        </div>
      </div>
    )
  }
}

export default Calculadora
