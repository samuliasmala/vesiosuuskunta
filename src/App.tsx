import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <h1>Pinsiön alueen vesiosuuskunnan vesilaskuri</h1>

        <Field name="prevAmount" text="Edellinen lukema: " type="number">
          m<sup>2</sup>
        </Field>

        <Field name="currAmount" text="Nykyinen lukema: " type="number">
          m<sup>2</sup>
        </Field>

        <Field name="usage" text="Kulutus: " type="number" disabled>
          m<sup>2</sup>
        </Field>

        <Field name="unitPrice" text="Veden yksikköhinta: " type="number" value="1.5" disabled>
          €/m<sup>2</sup>
        </Field>

        <Field name="waterPrice" text="Veden hinta: " type="number" disabled>
          €
        </Field>

        <Field name="baseFee" text="Perusmaksu: " type="number" value="50" disabled>
          €
        </Field>

        <Field name="totalPrice" text="Yhteensä: " type="number" disabled>
          €
        </Field>
      </div>
    </div>
  );
}

const Field: React.FC<{
  name: string;
  text: string;
  type: string;
  value?: string;
  disabled?: boolean;
}> = ({ children, name, text, type, value, disabled }) => {
  return (
    <div className={`row formRow ${name}Row`}>
      <Label name={name} text={text} />
      <Value type={type} name={name} value={value} disabled={disabled} />
      <Unit>{children}</Unit>
    </div>
  );
};

const Label: React.FC<{ name: string; text: string }> = ({ name, text }) => {
  return (
    <div className="col labelCol">
      <label htmlFor={name}>{text}</label>
    </div>
  );
};

const Value: React.FC<{ type: string; name: string; value?: string; disabled?: boolean }> = ({
  type,
  name,
  value,
  disabled,
}) => {
  return (
    <div className="col valueCol">
      <input
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        className={`inputField ${name}Field`}
      />
    </div>
  );
};

const Unit: React.FC = ({ children }) => {
  return <div className="col unitCol">{children}</div>;
};

export default App;
