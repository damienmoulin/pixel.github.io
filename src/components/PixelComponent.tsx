import { ChangeEvent, FunctionComponent, useState } from "react";

const PixelComponent: FunctionComponent = () => {

  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const [redValue, setRedValue]= useState<number>(parseInt(params.get('red') ?? '0'));
  const [greenValue, setGreenValue]= useState<number>(parseInt(params.get('green') ?? '0'));
  const [blueValue, setBlueValue]= useState<number>(parseInt(params.get('blue') ?? '0'));

  const colorValue = {
    red: 18,
    green: 39,
    blue: 43
  }
  const getEnergy = (): number => {
    return (redValue/255*colorValue.red) + (greenValue/255*colorValue.green) + (blueValue/255*colorValue.blue);
  }

  const handleRgbChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    if (parseInt(e.target.value) > 255) {
      e.target.value = "255"
    }

    params.set(name, e.target.value);
    window.history.pushState({ page: 1 }, "color", `?${params.toString()}`);
  }

  return (
    <>
    <div className="pixel">
      <div className="pixel-show">
        <div className="pixel-color" style={{background: `rgb(${redValue}, ${greenValue}, ${blueValue})`, color: `rgb(${(redValue-255)*-1}, ${(greenValue-255)*-1}, ${(blueValue-255)*-1})`}}>
          <a className="pixel-info" rel="noreferrer" target="_blank" title="Detail of pixel consumption" href="https://gist.github.com/damienmoulin/6040bd0a439a1ae8f69b7f03f175ecfe">?</a>
          <div className="pixel-result">
            {Math.round(getEnergy())}
          </div>
        </div>
      </div>
      <div className="pixel-form">
          rgb(
            <input type={"number"} step={1} defaultValue={redValue} min={0} max={255} name={"red"} onChange={
              (e) => {
                handleRgbChange(e, "red")
                setRedValue(parseInt(e.target.value))
              }
            }/>,
            <input type={"number"} step={1} defaultValue={greenValue} min={0} max={255} name={"green"} onChange={
              (e) => {
                handleRgbChange(e, "green")
                setGreenValue(parseInt(e.target.value))
              }
            }/>,
            <input type={"number"} step={1} defaultValue={blueValue} min={0} max={255} name={"blue"} onChange={
              (e) => {
                handleRgbChange(e, "blue")
                setBlueValue(parseInt(e.target.value))
              }
            }/>
          )
        </div>
    </div>
    </>
  )
}

export default PixelComponent